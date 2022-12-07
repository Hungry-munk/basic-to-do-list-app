import * as creation from "./domCreation"
import * as UI from  "./UImaniupulation";


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
    cancelBtn.addEventListener("click", UI.removeModal)
    cross.addEventListener("click", UI.removeModal)
    backgroundModal.style.display = "flex"
}

export function removeModal(event) {
    const backgroundModal = document.querySelector("#modalBackground")
    const form = document.querySelector(".modal")
    const cancelBtn = document.querySelector(".cancelTaskBtn")
    const cross = document.querySelector(".fa-x")

    cancelBtn.addEventListener("click", UI.removeModal)
    cross.addEventListener("click", UI.removeModal)

    backgroundModal.removeChild(form)
    backgroundModal.style.display = "none"
}