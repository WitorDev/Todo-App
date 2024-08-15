let isPortuguese = false;

function createTodo() {
    let textInput = document.getElementById('textInput');
    const todoContainer = document.getElementById('todoContainer');

    if (todoContainer.childElementCount > 8) {
        todoContainer.style.overflowY = "scroll";
        todoContainer.style.borderRadius = "0px";
    }

    if(textInput.value == ""){
        if(isPortuguese){  
            alert("Por favor nomeie o afazer!");
        } else {
            alert("Please insert todo name!");
        }
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

function languageSwitch() {

    let title = document.getElementById("header-title");
    let inputLabel = document.getElementById("input-label");
    let inputButton = document.getElementById("createTodoBtn");
    let languageSwitcher = document.getElementById("languageSwitcher");

    if(languageSwitcher.innerText != "Switch Language") {
        title.innerText = "App de Afazeres";
        inputLabel.innerHTML = 
        `Afazer: <input name="textInput" placeholder="Crie afazeres aqui..." maxlength="70" id="textInput" type="text">`;
        inputButton.innerText = "Criar Afazer";
        languageSwitcher.innerText = "Switch Language";

        isPortuguese = true;
    } else {
        title.innerText = "To do App";
        inputLabel.innerHTML = 
        `Todo: <input name="textInput" placeholder="Set a todo here..." maxlength="70" id="textInput" type="text">`;
        inputButton.innerText = "Create Todo";
        languageSwitcher.innerText = "Trocar Idioma";

        isPortuguese = false;
    }
}
