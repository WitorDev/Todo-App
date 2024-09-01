let inputText = document.querySelector("#todo");
let addButton = document.querySelector("button");
let form = document.querySelector("form");
let todoList = document.querySelector("hr");
let allTodos = [];

class Todo{
    constructor(text, done){
        this.text = text;
        this.done = done;
    }
    get todoText() {
        return this.text;
    }
}

addButton.addEventListener("click", () => {
    addTodo(inputText.value, false);
});
form.addEventListener("submit", (e) => {
        serializedTodos = JSON.stringify(allTodos);
        localStorage.setItem("todos", serializedTodos);
        e.preventDefault();
})

function renderTodos() {
    let deserializedTodos = JSON.parse(localStorage.getItem("todos"));
    for (let i = 0; i < deserializedTodos.length; i++) {
        addTodo(deserializedTodos[i].text, deserializedTodos[i].done, true);
    }
}
renderTodos();

function addTodo(text, done, rendering) {
    let isDone;

    if (done == true) {
        isDone = "checked";
    } else {
        isDone = "";
    }

    if (inputText.value == "" && rendering != true) {
        alert("Insert To-Do Name.");
    } else {
        allTodos.push(new Todo(text, done));
        let todoHTML = `
            <li id="${allTodos.length}">
                <input type="checkbox" onchange="checkTodo(this)"${isDone}>
                <p>${text}</p>
                <button onclick="deleteTodo(this)"><i class="fa fa-trash"></i></button>
            </li>`;
        todoList.insertAdjacentHTML("afterend", todoHTML);
            
        inputText.value = "";
        listStyling();
    }
}

function checkTodo(checkbox) {
    let todo = checkbox.parentElement.id - 1;
    if(allTodos[todo].done == true) {
        allTodos[todo].done = false;
    } else {
        allTodos[todo].done = true;
    }

    localStorage.setItem("todos", JSON.stringify(allTodos));
}

function deleteTodo(deleteButton) {
    let todo = deleteButton.parentElement;

    allTodos.splice(todo.id - 1, 1);
    todo.remove();

    localStorage.setItem("todos", JSON.stringify(allTodos));
    listStyling();
}

function listStyling() {
    //styling the app structure.
    let list = document.querySelector("ul");
    if (list.childElementCount >= 9) {
        list.style.overflowY = "scroll";
    } else {
        list.style.overflowY = "hidden";
    }
}

function lightMode() {
    document.querySelector("*").classList.toggle("light-mode");
}