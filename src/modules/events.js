import * as UI from "./UImaniupulation"

export const UImanipulator = ()=>{
    // elements
    const menuIcon = document.querySelector(".menuIcon")
    const projectsDropdown = document.querySelector(".projectsTitle")
    const addTaskBtn = document.querySelector(".addTask")
    // event listeners
    menuIcon.addEventListener("click" , UI.displayMenu)
    projectsDropdown.addEventListener("click", UI.displayProjects)
    addTaskBtn.addEventListener("click",UI.displayModal)
}