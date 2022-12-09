import { UImanipulator } from "./modules/events";
import * as str from "./modules/storage"

import * as UI from "./UImaniupulation"

export const UImanipulator = ()=>{
    // elements
    const menuIcon = document.querySelector(".menuIcon")
    const projectsDropdown = document.querySelector(".projectsTitle")
    const addTaskBtn = document.querySelector(".addTask")

    const addProjectBtn = document.querySelector(".addProject")
    // event listeners
    menuIcon.addEventListener("click" , UI.displayMenu)
    projectsDropdown.addEventListener("click", UI.displayProjects)
    addTaskBtn.addEventListener("click",UI.displayModal)
    addProjectBtn.addEventListener("click",UI.displayProjectCreation)

}


const masterObject = str.getMasterObject()
UImanipulator()
