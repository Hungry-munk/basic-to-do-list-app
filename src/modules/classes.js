export class Project {
    constructor(title) {
        this.title = title
        this.tasks = []

    }

    generateHTML () {
        return 
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

    }
     
}

export class masterObject {
    constructor() {
        this.projects = []
    }

    get allTasks() {
        return this.projects.reduce((tasksArray,project)=>(
            tasksArray.concat(project.tasks)),[])
    }


}

