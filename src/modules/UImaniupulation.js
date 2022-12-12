import * as creation from "./domCreation"
import * as func from "./function"
import * as bundle from "./functionBundler"
import * as str from "./storage"
import {isToday , isThisWeek} from "date-fns"

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

export function displayModal(event){
    const backgroundModal = document.querySelector("#modalBackground")
    if (backgroundModal.childNodes.length > 0) return
    backgroundModal.appendChild(creation.createTaskModal(str.masterObject))

    const cross = document.querySelector(".fa-x")
    const cancelBtn = document.querySelector(".cancelTaskBtn")
    const confirmTask = document.querySelector(".addTaskBtn")
    // adding event listeners
    func.addEvent(removeModal,"click",cross,cancelBtn)
    confirmTask.addEventListener("click",bundle.createTask)

    backgroundModal.style.display = "flex"
}

export function removeModal(event) {
    const backgroundModal = document.querySelector("#modalBackground")
    const form = document.querySelector(".modal")
    const cancelBtn = document.querySelector(".cancelTaskBtn")
    const cross = document.querySelector(".fa-x")
    const confirmTask = document.querySelector(".addTaskBtn")

    func.removeEvent(removeModal,"click",cross,cancelBtn)
    confirmTask.removeEventListener("click",bundle.createTask)

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
    cancelProjectBtn.removeEventListener("click",removeProjectCreation)


    dropdown.removeChild(projectCreator)
    projects.style.display = "flex"
    addProjectBtn.style.display = "flex"
}

export function addProjects(...projects) {
    const projectContainer = document.querySelector(".projects")
    projects.forEach(project=>{
        if (project.title == "Home") return
        const projectElement = project.projectHTML;
        const trashIcon = projectElement.querySelector(".bin")
        const taskCounter = projectElement.querySelector(".taskCounter")
        
        projectElement.setAttribute("project",`${project.title}`)
        trashIcon.addEventListener("click",func.removeProject.bind(project))
        taskCounter.textContent = project.tasks.length

        projectContainer.appendChild(projectElement)
    })
}
// task chaning module
export const render = ((masterObj)=>{
    const SelectionTitle = document.querySelector("h2.selctionTitle")
    const tasksContainer = document.querySelector(".tasks")
    function homeTasks() {
        tasksContainer.innerHTML=""
        masterObj.tasks.forEach(task=>{
            tasksContainer.appendChild(task.taskHTML);
        })
    }
    
    function todayTasks(){
        tasksContainer.innerHTML=""
        masterObj.tasks.forEach(task=>{
            if (isToday(new Date(task.dueDate)))
                tasksContainer.appendChild(task.taskHTML);
        })
    }

    function weekTasks(){
        tasksContainer.innerHTML=""
        masterObj.tasks.forEach(task=>{
            if (isThisWeek(new Date(task.dueDate)))
                tasksContainer.appendChild(task.taskHTML);
        })
    }

    function completedTasks () {
        tasksContainer.innerHTML=""
        masterObj.tasks.forEach(task=>{
            if (task.completion)
                tasksContainer.appendChild(task.taskHTML);
        })
    }

    function projectTasks (project) {

    }


    return {
        homeTasks,
        todayTasks,
        weekTasks,
        completedTasks,
        projectTasks,

    }
})(str.masterObject)