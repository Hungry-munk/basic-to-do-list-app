import * as creation from "./domCreation"
import * as func from "./function"

export function displayMenu() {
    const main = document.querySelector("main#main")
    const taskContainer = document.querySelector(".taskContainer")
    main.classList.toggle("menuIsNotActive")
}

export function displayProjects(event) {
    const dropDown = document.querySelector(".dropDown")
    const caretSymbol = event.target.children[0]
    if (dropDown.style.display == "none") {
        dropDown.style.display = "block"
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
    backgroundModal.appendChild(creation.createTaskModal())

    const cross = document.querySelector(".fa-x")
    const cancelBtn = document.querySelector(".cancelTaskBtn")
    func.addEvent(removeModal,"click",cross,cancelBtn)

    backgroundModal.style.display = "flex"
}

export function removeModal(event) {
    const backgroundModal = document.querySelector("#modalBackground")
    const form = document.querySelector(".modal")
    const cancelBtn = document.querySelector(".cancelTaskBtn")
    const cross = document.querySelector(".fa-x")

    func.removeEvent(removeModal,"click",cross,cancelBtn)

    backgroundModal.removeChild(form)
    backgroundModal.style.display = "none"
}

export function displayProjectCreation(event) {
    const projectCreator = creation.createProjectcreator()
    const projects = document.querySelector(".projects")
    const addProjectBtn = document.querySelector(".addProject")
    const dropdown = document.querySelector(".dropDown")
    dropdown.appendChild(creation.createProjectcreator())

    const confirmProjectBtn = document.querySelector(".addProjectBtn")
    const cancelProjectBtn = document.querySelector(".cancelProjectBtn")

    func.addEvent(removeProjectCreation,"click",cancelProjectBtn)

    projects.style.display = "none"
    addProjectBtn.style.display = "none"

}

export function removeProjectCreation(event) {
    const projectCreator = document.querySelector(".projectCreator")
    const projects = document.querySelector(".projects")
    const addProjectBtn = document.querySelector(".addProject")
    const dropdown = document.querySelector(".dropDown")    
    
    const confirmProjectBtn = document.querySelector(".addProjectBtn")
    const cancelProjectBtn = document.querySelector(".cancelProjectBtn")

    func.removeEvent(removeProjectCreation,"click",cancelProjectBtn)


    dropdown.removeChild(projectCreator)
    projects.style.display = "block"
    addProjectBtn.style.display = "block"
}

export function addProjects(...projects) {
    const projectContainer = document.querySelector("projects")
    projects.forEach(project=>{
        projectContainer.appendChild(project)
    })
}