import * as creation from "./domCreation"
import * as func from "./function"
import * as bundle from "./functionBundler"
import * as str from "./storage"
import { isToday, isThisWeek } from "date-fns"
import { task } from "./classes"

export function displayMenu() {
    const main = document.querySelector("main#main")
    const taskContainer = document.querySelector(".taskContainer")
    main.classList.toggle("menuIsNotActive")
}

export function displayProjects(event) {
    const dropDown = document.querySelector(".dropDown")
    const caretSymbol = event.target.children[0]
    if (dropDown.style.display == "none") {
        dropDown.style.display = "flex"
        caretSymbol.classList.toggle("fa-caret-down")
        caretSymbol.classList.toggle("fa-caret-up")
    } else {
        dropDown.style.display = "none"
        caretSymbol.classList.toggle("fa-caret-down")
        caretSymbol.classList.toggle("fa-caret-up")
    }
}

export function displayModal(event) {
    const backgroundModal = document.querySelector("#modalBackground")
    if (backgroundModal.childNodes.length > 0) return
    backgroundModal.appendChild(creation.createTaskModal(str.masterObject))

    const cross = document.querySelector(".fa-x")
    const cancelBtn = document.querySelector(".cancelTaskBtn")
    const confirmTask = document.querySelector(".addTaskBtn")
    // adding event listeners
    func.addEvent(removeModal, "click", cross, cancelBtn)
    confirmTask.addEventListener("click", bundle.createTask)

    backgroundModal.style.display = "flex"
}

export function removeModal(event) {
    const backgroundModal = document.querySelector("#modalBackground")
    const form = document.querySelector(".modal")
    const cancelBtn = document.querySelector(".cancelTaskBtn")
    const cross = document.querySelector(".fa-x")
    const confirmTask = document.querySelector(".addTaskBtn")

    func.removeEvent(removeModal, "click", cross, cancelBtn)
    confirmTask.removeEventListener("click", bundle.createTask)

    backgroundModal.removeChild(form)
    backgroundModal.style.display = "none"
}

export function displayProjectCreation(event) {
    const projectCreator = creation.createProjectCreator()
    const projects = document.querySelector(".projects")
    const addProjectBtn = document.querySelector(".addProject")
    const dropdown = document.querySelector(".dropDown")
    dropdown.appendChild(creation.createProjectCreator())
    //  buttons on modal
    const confirmProjectBtn = document.querySelector(".addProjectBtn")
    const cancelProjectBtn = document.querySelector(".cancelProjectBtn")

    confirmProjectBtn.addEventListener("click", bundle.createProject)
    cancelProjectBtn.addEventListener("click", removeProjectCreation)

    projects.style.display = "none"
    addProjectBtn.style.display = "none"

}

export function removeProjectCreation(event) {
    const projectCreator = document.querySelector(".projectCreator")
    const projects = document.querySelector(".projects")
    const addProjectBtn = document.querySelector(".addProject")
    const dropdown = document.querySelector(".dropDown")
    //  buttons on modal
    const confirmProjectBtn = document.querySelector(".addProjectBtn")
    const cancelProjectBtn = document.querySelector(".cancelProjectBtn")

    confirmProjectBtn.removeEventListener("click", bundle.createProject)
    cancelProjectBtn.removeEventListener("click", removeProjectCreation)


    dropdown.removeChild(projectCreator)
    projects.style.display = "flex"
    addProjectBtn.style.display = "flex"
}

export function addProjects(...projects) {
    const projectContainer = document.querySelector(".projects")
    projects.forEach(project => {
        if (project.title == "Home") return
        const projectElement = project.projectHTML;
        const trashIcon = projectElement.querySelector(".bin")
        const taskCounter = projectElement.querySelector(".taskCounter")

        projectElement.setAttribute("project", `${project.title}`)
        projectElement.addEventListener("click", render.projectTasks.bind(project))
        projectElement.addEventListener("mouseenter", projectTaskCounter.bind(project))
        trashIcon.addEventListener("click", func.removeProject.bind(project))
        // taskCounter.textContent = project.tasks.length

        projectContainer.appendChild(projectElement)
    })
}

export function changeActivatedProject(projectName, element) {
    const activatedProject = document.querySelector(".active")
    activatedProject.classList.remove("active")
    str.masterObject.changeCurrentProject(projectName)
    element.closest("li").classList.add("active")
}

export function updateDefualtTaskCounters() {
    const taskCounter = this.querySelector(".taskCounter")
    if (this.classList.contains("home")) {
        taskCounter.setAttribute("taskCount", `${str.masterObject.tasks.length}`)
    } else if (this.classList.contains("today")) {
        taskCounter.setAttribute("taskCount", `${str.masterObject.tasks.filter(task => (
            isToday(new Date(task.dueDate)))).length}`);
    } else if (this.classList.contains("upcoming")) {
        taskCounter.setAttribute("taskCount", `${str.masterObject.tasks.filter(task => (
            isThisWeek(new Date(task.dueDate)))).length}`);
    } else if (this.classList.contains("completed")) {
        taskCounter.setAttribute("taskCount", `${str.masterObject.tasks.filter(task => (
            task.completion)).length}`);
    }
}

export function projectTaskCounter(event) {
    const taskCounter = event.target.querySelector(".taskCounter")
    taskCounter.setAttribute("taskCount", `${this.tasks.length}`)
}
// task chaning module

function taskDomEvent(task){
    const taskElement = task.taskHTML
    // manipulation features
    const binBtn = taskElement.querySelector(".bin")
    const squareBtn = taskElement.querySelector(".fa-square")
    const editBtn = taskElement.querySelector(".edit")
    const taskDetailsbtn = taskElement.querySelector(".taskDetails")
    //  event listeners
    binBtn.addEventListener("click",taskManipulation.deleteTask.bind(task))
    taskDetailsbtn.addEventListener("click",taskManipulation.viewDetails.bind(task))

    return taskElement
}

export const taskManipulation = (()=>{
    const tasksContainer = document.querySelector(".tasks")
    const backgroundModal = document.querySelector("#modalBackground")

    function deleteTask (event) {
        const taskElement = event.target.parentElement
        const taskProject = str.masterObject.projects.find(project=>
            project.tasks.includes(this));
        taskProject.tasks.splice(taskProject.tasks.indexOf(this),1)
        tasksContainer.removeChild(taskElement)
        event.target.removeEventListener("click", taskManipulation.deleteTask)
        str.saveMasterObject()
    }

    function viewDetails (event) {
        if (backgroundModal.childNodes.length > 0) return
        const detailsELement = creation.createDetailsModal(
            this.title,
            this.details,
            this.priority,
            this.dueDate,
            this.project,
            this.completion
        )

        const cross = detailsELement.querySelector(".fa-x")

        cross.addEventListener('click', removeViewDetails)
        backgroundModal.appendChild(detailsELement)
        backgroundModal.style.display = "flex"
    }

    function removeViewDetails() {
        const cross = this.querySelector(".fa-x")
        const modal = this.parentElement.parentElement
        
        this.removeEventListener("click",removeViewDetails)

        backgroundModal.removeChild(modal)
        backgroundModal.style.display = "none"
    }



    return {
        deleteTask,
        viewDetails,
        removeViewDetails,



    }
})()

export const render = ((masterObj) => {
    const selectionTitle = document.querySelector("h2.selectionTitle")
    const tasksContainer = document.querySelector(".tasks")

    function homeTasks(event) {
        tasksContainer.innerHTML = ""
        selectionTitle.textContent = "Home"
        const eventElement = event instanceof HTMLElement ?
            event : event.target;
        changeActivatedProject("Home", eventElement)

        masterObj.tasks.forEach(task => {
            tasksContainer.appendChild(taskDomEvent(task));
        })
    }

    function todayTasks(event) {
        tasksContainer.innerHTML = ""
        selectionTitle.textContent = "Today"
        changeActivatedProject("Today", event.target)

        masterObj.tasks.forEach(task => {
            if (isToday(new Date(task.dueDate)))
                tasksContainer.appendChild(taskDomEvent(task));
        })
    }

    function weekTasks(event) {
        tasksContainer.innerHTML = ""
        selectionTitle.textContent = "Upcoming"
        changeActivatedProject("Upcoming", event.target)

        masterObj.tasks.forEach(task => {
            if (isThisWeek(new Date(task.dueDate)))
                tasksContainer.appendChild(taskDomEvent(task));
        })
    }

    function completedTasks(event) {
        tasksContainer.innerHTML = ""
        selectionTitle.textContent = "Completed"
        changeActivatedProject("Completed", event.target)

        masterObj.tasks.forEach(task => {
            if (task.completion)
                tasksContainer.appendChild(taskDomEvent(task));
        })
    }


    function projectTasks(event) {
        tasksContainer.innerHTML = ""
        selectionTitle.textContent = this.title
        changeActivatedProject(this.title, event.target)
        this.tasks.forEach(task => {
            tasksContainer.appendChild(taskDomEvent(task))
        })

    }

    function updateTasks(theTask) {
        
        if (masterObj.currentProject == theTask.project) {
            tasksContainer.innerHTML = ""
            masterObj.projects.find(project => project.title == theTask.project
            ).tasks.forEach(task => tasksContainer.appendChild(taskDomEvent(task)));
        } else if (masterObj.currentProject == "Today" && isToday(new Date(theTask.dueDate))) {
            tasksContainer.innerHTML = ""
            masterObj.tasks.forEach(task => {
                if (isToday(new Date(task.dueDate)))
                    tasksContainer.appendChild(taskDomEvent(task));
            });
        } else if (masterObj.currentProject == "Upcoming" && isThisWeek(new Date(theTask.dueDate))) {
            tasksContainer.innerHTML = ""
            masterObj.tasks.forEach(task=>{
                if (isThisWeek(new Date(task.dueDate))) 
                    tasksContainer.appendChild(taskDomEvent(task));
            });
        }
    }
    return {
        homeTasks,
        todayTasks,
        weekTasks,
        completedTasks,
        projectTasks,
        updateTasks,

    }
})(str.masterObject)