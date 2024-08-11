function createTodo() {
    let textInput = document.getElementById('textInput');
    const todoContainer = document.getElementById('todoContainer');

    if(textInput.value == ""){
        alert("Please insert todo name!");
    } else {
        let currentTodo = todoContainer.childElementCount + 1;
        todoContainer.insertAdjacentHTML("beforeend", `<div class="todo-item-container"><input type="checkbox" onClick="doTodo(this.id)" id="todo-checkbox-${currentTodo}" class="todo-item-checkbox"><button onClick="deleteTodo(this.id)" id="todo-${currentTodo}" class="delete-todo-button"><i class="fa-solid fa-xmark"></i></button><p class="todo-item">${textInput.value}</p></div>`);
        textInput.value = "";
    }
}

function deleteTodo(btnId) {
    const todoContainer = document.getElementById(btnId).parentElement.remove();
}

function doTodo(todoId) {
    let currentMarkedTodo = document.getElementById(todoId);
    let todoText = currentMarkedTodo.parentElement.lastChild;

    todoText.classList.toggle('marked-todo');
}  