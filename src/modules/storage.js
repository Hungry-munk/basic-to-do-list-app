import {createFirstTimeMasterObj} from "./function"
import * as cls from "./classes"

export const masterObject = (()=>{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.masterObject) {
            const storedMasterObject = JSON.parse(localStorage.masterObject)
            if (storedMasterObject.projects[0].title != "Home")
                return createFirstTimeMasterObj();

            const newMasterObject = new cls.masterObject()
            // transfering all projects and tasks
            newMasterObject.projects = storedMasterObject.projects.map(project=>{
                const newProject = new cls.Project()
                newProject.tasks = project.tasks.map(task=>{
                    return Object.assign(new cls.task(),task);
                });
                newProject.title = project.title
                return newProject
            })
            // saving the master object to local storage
            localStorage.clear()                        
            localStorage.masterObject = JSON.stringify(newMasterObject)
            return newMasterObject;
        } else 
            return createFirstTimeMasterObj();
    } else
        return createFirstTimeMasterObj();
})();

export function saveProject (project,masterObj) {
    masterObj.projects.push(project)
    localStorage.masterObject = JSON.stringify(masterObj)
}

export function saveTask(task, masterObj) {
    (masterObj.projects.find(project => project.title == task.project
        )).tasks.push(task)
    localStorage.masterObject = JSON.stringify(masterObj)
}

export function saveMasterObject() {
    localStorage.masterObject = JSON.stringify(masterObject)
}