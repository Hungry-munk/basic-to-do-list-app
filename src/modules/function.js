import * as cls from "./classes";
import * as str from "./storage"

export function createFirstTimeMasterObj() {
    // creating master object
    const masterObject = new cls.masterObject()
    // adding home project
    masterObject.projects.push(new cls.Project("Home"))
    // adding example task
    const exampleTask = new cls.task("exampleTask","testing please work", "medium","12/12/12","Home")
    masterObject.projects[0].tasks.push(exampleTask)
    localStorage.masterObject = JSON.stringify(masterObject)    
    return masterObject
}

export function addEvent (func,event, ...elements ) {
    elements.forEach(element=>element.addEventListener(event,func))};

export function removeEvent (func,event, ...elements ) {
    elements.forEach(element=> element.removeEventListener(event,func))};

export function createProject(inputValue){
    const newProject = new cls.Project(inputValue)
    //  for expansion if needed
    return newProject
}

export function createTask(title,description,priority,dueDate,project) {
    const newTask = new cls.task(title,description,priority,dueDate,project)
    // fir expansion id needed
    return newTask
}

export function checkNameValidity(name) {
    const InvalidPattern = /^[1-9!@#$%^&*(),.?":{}|<>].*/g
    if (!name) return {
            validity:false,
            message: "cant enter empty name"
        } 
    else if (InvalidPattern.test(name)) return {
        validity:false,
        message: "cant start with numbers or special character"
        }
    else if (checkRepeatedProjectName(name)) return {
        validity:false,
        message: "project name already exsists"
    }
    return {
        validity:true,
        message : ""
    }
}

function checkRepeatedProjectName (name) {
    return !!(str.masterObject.projects.find(project =>
        project.title.toLowerCase() == name.toLowerCase()))
}

export function formatDate (date) {
    if (!date) return "not due"
    //replacing - with /
    return date.replace(/-/g, "/")
}