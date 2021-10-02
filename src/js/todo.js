const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"

let todos = [];

function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function handleMouseEnter(btn) {
    btn.innerText = "✔"
}

function deleteToDo(event) {
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
}

function paintToDo(newToDoObj) {
    const li = document.createElement("li");

    li.id = newToDoObj.id;

    const span = document.createElement("span");
    span.innerHTML = newToDoObj.text;
    const btn = document.createElement('button');
    btn.innerText = "✘";
    btn.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(btn)
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";

    const newToDoObj = {
        text: newTodo,
        id: Date.now(),
    }
    todos.push(newToDoObj);
    paintToDo(newToDoObj);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}