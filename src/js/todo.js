const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");

const TODOS_KEY = "todos"
let liId = 0

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
    todos.splice(li.id, 1);
    console.log(todos)
    saveToDos();
}

function paintToDo(newTodo) {
    const li = document.createElement("li");
    li.id = liId;
    const span = document.createElement("span");
    span.innerHTML = newTodo;
    const btn = document.createElement('button');
    btn.innerText = "✘";
    btn.addEventListener("click", deleteToDo)
    li.appendChild(span)
    li.appendChild(btn)
    todoList.appendChild(li);
    liId += 1;
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintToDo(newTodo);
    todos.push(newTodo);
    saveToDos();
}

todoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if (savedToDos !== null){
    const parsedToDos = JSON.parse(savedToDos);
    todos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}