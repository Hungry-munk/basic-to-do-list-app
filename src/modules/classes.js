import * as creation from "./domCreation"

export class Project {
    constructor(title) {
        this.title = title
        this.tasks = []

    }

    get projectHTML () {
        return creation.createProject(this.title)
    }
    
    addTask(task){
        this.tasks.push(task)
    }

    removeTask(taskIndex) {
        this.tasks.splice(taskIndex, 1)
    }

}

export class task {
    constructor(title,description,priority,dueDate,project) {
        this.title = title;
        this.description = description;
        this.priority= priority;
        this.dueDate = dueDate;
        this.project = project
        this.completion =  false;
    }
     
    get taskHTML () {
        return creation.createTask(
            this.title,
            this.priority,
            this.dueDate,
            this.project,
            this.completion,
        )
    }

}

export class masterObject {
    constructor() {
        this.projects = []
    }

    get tasks() {
        return this.projects.reduce((tasksArray,project)=>(
            tasksArray.concat(project.tasks)),[])
    }

}

