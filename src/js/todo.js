const todoForm = document.getElementById("todo-form");
const todoInput = todoForm.querySelector("#todo-form input");
const todoList = document.getElementById("todo-list");


function paintToDo(newTodo) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerHTML = newTodo;
    const btn = document.createElement('button');
    btn.innerText = "❌";
    li.appendChild(span)
    li.appendChild(btn)

    todoList.appendChild(li);


}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    paintToDo(newTodo);
}
todoForm.addEventListener("submit", handleToDoSubmit);