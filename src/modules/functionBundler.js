import * as creation from "./domCreation"
import * as func from "./function"
import * as str from "./storage"
import * as UI from "./UImaniupulation"

// for when the the user wants to confirm their project creation
export function createProject(event) {
    const inputField = document.querySelector("input#projectName")
    const valueInfo = func.checkNameValidity(inputField.value)

    // const 
    if (!valueInfo.validity) {
        const errorMsg = document.querySelector("span.projectErorrMsg")
        errorMsg.textContent = valueInfo.message;
        setTimeout(()=>{errorMsg.textContent=""},1200)
        return
    }
    // project creation
    const newProject = func.createProject(inputField.value)
    str.saveProject(newProject,str.masterObject)
    UI.addProjects(newProject)
    // finishing
    UI.removeProjectCreation()

}

export function createTask(event) {
    const taskNameField = document.querySelector("input#taskTitle")
    const taskDescription = document.querySelector("#taskDescription")
    const taskPriority = document.querySelector("#priority")
    const projectSelected = document.querySelector("#projectSelection")
    const dueDate = document.querySelector("#dueDate")
    // is name valif
    
    const taskNameInfo = func.checkNameValidity(taskNameField.value)
    // const 
    if (!taskNameInfo.validity) {
        const errorMsg = document.querySelector("span.errorMsg")
        errorMsg.textContent = taskNameInfo.message;
        setTimeout(()=>{errorMsg.textContent=""},1200)
        return
    }

    const useableDate = func.formatDate(dueDate.value)
    const newTask = func.createTask(
        taskNameField.value,
        taskDescription.value,
        taskPriority.value,
        useableDate,
        projectSelected.value
    )
    str.saveTask(newTask,str.masterObject)
    UI.render.updateTasks(newTask)
    UI.removeModal()

}
