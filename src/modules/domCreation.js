import { masterObject } from "./storage"
import { format } from "date-fns"

export function createTaskModal(masterObj){
    const taskCreator = document.createElement("div")
    taskCreator.classList.add("modal")
    taskCreator.innerHTML = `
        <div class="taskCreationHeader modalHeader">
            <div>New Task</div>
            <i class="fa-solid fa-x"></i>
        </div>
        <form class="taskCreationForm modalInfo">
            <div class="taskDetails1">
                <label for="taskTitle">Title:</label>
                <input class="taskEntry" type="text" id="taskTitle" placeholder="e.g. Pay bills" spellcheck = "true">
                <span class="errorMsg"></span>

                <label for="taskDescription">Description:</label>
                <textarea class="taskEntry" id="taskDescription" placeholder="e.g. internet, phone, rent, etc" spellcheck = "true"></textarea>

            </div>
            <div class="taskDetails2">
                <label for="dueDate">Due Date:</label>
                <input type="date" class="taskEntry" id="dueDate">

                <label for="priority">Priority:</label>
                <select id="priority" class="taskEntry">
                    <option value="none" selected>None</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <label for="projectSelection">Project:</label>
                <select id="projectSelection" class="taskEntry">
                
                </select>
            </div>
            <div class="taskCreationDecision">
                <button type="button" class="cancelTaskBtn modalBtn cancelModalBtn">Cancel</button>
                <button type="button" class="addTaskBtn modalBtn addModalBtn">Add task</button>
            </div>

        </form>

    `
    // accessing the second select option
    const projectSelector = taskCreator.querySelector("#projectSelection")
    masterObj.projects.forEach(project => {
        const option = document.createElement("option")
        option.textContent = project.title
        option.value = project.title
        // default option
        if (project.title == masterObject.currentProject) option.selected = true

        projectSelector.appendChild(option)
    });

    return taskCreator
}

export function createProjectCreator () {
    const projectCreator = document.createElement("div")
    projectCreator.classList.add("projectCreator")
    projectCreator.innerHTML = `
        <div>
            <input id="projectName" type="text" placeholder="Project name...">
            <span class="projectErorrMsg"></span>
        </div>
        <div>
            <button class="projectBtn cancelProjectBtn">Cancel</button>
            <button class="projectBtn addProjectBtn">Add Project</button>
        </div>
    `
    return projectCreator
}

export function createProject(projectTitle) {
    const projectHTML = document.createElement("li")
    projectHTML.classList.add("project")
    projectHTML.innerHTML = `
        <i class="fa-solid fa-circle"></i>
        <div class="projectTitle">${projectTitle}</div>
        <div class="taskCounter"></div>
        <i class="fa-solid fa-trash bin"></i>
    `
    return projectHTML
}

export function createTask(title,priority,dueDate,project,completion) {
    const task = document.createElement("div")
    task.setAttribute("project",`${project}`)
    task.classList.add("task",`${priority}`)
    if (completion) task.classList.add("completed")
    task.innerHTML = `
        <i class="fa-regular fa-square ${priority} "></i>
        <div class="taskTitle">${title}</div>
        <button class="taskDetails">Details</button>
        <div class="taskDate">${dueDate}</div>
        <i class="fa-solid fa-pen-to-square edit"></i>
        <i class="fa-solid fa-trash bin"></i>
    `
    return task
}

export function createDetailsModal(title,details,priority,dueDate,project,completion) {
    const detailsElement = document.createElement("div")
    detailsElement.classList.add("modal", "detailsModal")
    detailsElement.innerHTML = `
    <div class="taskDetailsHeader modalHeader">
        <div>Task Details</div>
        <i class="fa-solid fa-x"></i>
    </div>
    <div class = "taskDetailsInformation modalInfo">
        <h2 class="taskDetailsTitle">${title}</h2>
        <p class="taskDetailsDetails">${details ? details : "no description..."}</p>
        <div class = "taskPriority">Task priority : <span class="${priority}">${priority}</span></div>
        <div class = "taskDueDate">Task due date : <span>${dueDate}</span></div>
        <div class = "taskProject">Task project : <span>${project}</span></div>
        <div class = "taskCompletion">Task completion : <span class = "${completion}">${completion?"task is completed":"task is not completed"}</span></div>
    </div>
    `

    return detailsElement
}