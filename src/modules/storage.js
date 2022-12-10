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
                newProject.tasks = project.tasks.map(task=>(
                    Object.assign(new cls.task,task)))
                return Object.assign(newProject,project) 
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
    console.log(masterObj)
    masterObj.projects.push(project)
    localStorage.masterObject = JSON.stringify(masterObj)
}