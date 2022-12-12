import * as str from "./modules/storage"
import * as UI from "./modules/UImaniupulation"
import * as func from "./modules/function"
// elements
const menuIcon = document.querySelector(".menuIcon")
const projectsDropdown = document.querySelector(".projectsTitle")
const addTaskBtn = document.querySelector(".addTask")
const addProjectBtn = document.querySelector(".addProject")
const sideBar = document.querySelector("aside")
const main = document.querySelector("main")
// event listeners
menuIcon.addEventListener("click" , UI.displayMenu)
projectsDropdown.addEventListener("click", UI.displayProjects)
addTaskBtn.addEventListener("click",UI.displayModal)
addProjectBtn.addEventListener("click",UI.displayProjectCreation)
// mainting sidebar height
// window.addEventListener("resize",e =>
//     sideBar.style.height = `${main.scrollHeight}px`)
// other
UI.addProjects(...str.masterObject.projects)
UI.render.homeTasks()