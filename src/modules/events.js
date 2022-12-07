import * as UI from "./UImaniupulation"

export const UImanipulator = ()=>{
    // elements
    const menuIcon = document.querySelector(".menuIcon")
    const projectsDropdown = document.querySelector(".projectsTitle")
    // event listeners
    menuIcon.addEventListener("click" , UI.displayMenu)
    projectsDropdown.addEventListener("click", UI.displayProjects)

}