import {createFirstTimeMasterObj} from "./function"
import * as cls from "./classes"

export const masterObject = (()=>{
    if (typeof(Storage) !== "undefined") {
        if (localStorage.masterObject) {
            const newMasterObject = new cls.masterObject()
            const storedMasterObject = JSON.parse(localStorage.masterObject)
            // transfering all projects and tasks
            newMasterObject.projects = storedMasterObject.projects.map(project=>{
                const newProject = new cls.Project()
                const newTasks = project.tasks.map(task=>{
                    const variable= Object.assign(new cls.task(),task);
                    console.log("")
                    console.log(variable)
                    return variable
                });
                console.log("new tasks")
                console.log(newTasks)
                newProject.tasks = newTasks
                console.log("newProject.tasks")
                console.log(newProject.tasks)
                console.log("newProject")
                console.log(newProject)
                return Object.assign(newProject, project)
            })
            // saving the master object to local storage
            localStorage.clear()                        
            localStorage.masterObject = JSON.stringify(newMasterObject)
            return newMasterObject
        }
        else {
            // just to make sure the user didnt change the local storage
            localStorage.clear()                        
            return createFirstTimeMasterObj()
        }
    } else {    
        // just to make sure the user didnt change the local storage
        localStorage.clear()                        
        return createFirstTimeMasterObj()
    }
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