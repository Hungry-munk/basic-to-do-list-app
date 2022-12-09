import * as cls from "./classes";

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

export function createProject(inputField){
    const inputValue = inputField.value
    const newProject = new cls.Project(inputValue)

    return newProject
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
    return {
        validity:true,
        Message : ""
    }
}