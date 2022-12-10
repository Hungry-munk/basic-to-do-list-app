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