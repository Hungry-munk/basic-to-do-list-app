import * as UI from  "./UImaniupulation";

export function createTaskModal(){
    const taskCreator = document.createElement("div")
    taskCreator.classList.add("modal")
    taskCreator.innerHTML = `
        <div class="taskCreationHeader modalHeader">
            <div>New Task</div>
            <i class="fa-solid fa-x"></i>
        </div>
        <form class="taskCreationForm">
            <div class="taskDetails1">
                <label for="taskTitle">Title:</label>
                <input class="taskEntry" type="text" id="taskTitle" placeholder="e.g. Pay bills" spellcheck = "true">
                <span class="errorMsg"></span>

                <label for="taskDescription">Description:</label>
                <textarea class="taskEntry" id="taskDescription" placeholder="e.g. internet, phone, rent, etc" spellcheck = "true"></textarea>

            </div>
            <div class="taskDetails2">
                <label for="">Due Date:</label>
                <input type="datetime-local" class="taskEntry">

                <label for="">Priority:</label>
                <select id="priority class="taskEntry">
                    <option value="none" selected>None</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <label for="">Project:</label>
                <select id="" class="taskEntry"></select>
            </div>
            <div class="taskCreationDecision">
                <button type="button" class="cancelTaskBtn modalBtn cancelModalBtn">Cancel</button>
                <button type="button" class="addTaskBtn modalBtn addModalBtn">Add task</button>
            </div>

        </form>

    `

    return taskCreator
}

export function createProjectcreator () {

} 