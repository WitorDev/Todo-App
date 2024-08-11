function createTodo() {
    let textInput = document.getElementById('textInput');
    const todoContainer = document.getElementById('todoContainer');

    if (todoContainer.childElementCount > 8) {
        todoContainer.style.overflowY = "scroll";
        todoContainer.style.borderRadius = "0px";
    }

    if(textInput.value == ""){
        alert("Please insert todo name!");
    } else {
        let currentTodo = todoContainer.childElementCount + 1;
        todoContainer.insertAdjacentHTML("beforeend", `<div class="todo-item-container"><input type="checkbox" onClick="doTodo(this.id)" id="todo-checkbox-${currentTodo}" class="todo-item-checkbox"><button onClick="deleteTodo(this.id)" id="todo-${currentTodo}" class="delete-todo-button"><i class="fa-solid fa-xmark"></i></button><p class="todo-item">${textInput.value}</p></div>`);
        textInput.value = "";
    }
}

function deleteTodo(btnId) {
    document.getElementById(btnId).parentElement.remove();

    if (document.getElementById('todoContainer').childElementCount <= 8) {
        todoContainer.style.overflowY = "hidden";
        todoContainer.style.borderRadius = "15px";
    }

}

function doTodo(todoId) {
    let currentMarkedTodo = document.getElementById(todoId);
    let todoText = currentMarkedTodo.parentElement.lastChild;

    todoText.classList.toggle('marked-todo');
}