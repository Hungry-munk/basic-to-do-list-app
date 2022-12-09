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

export function createProject(){


}