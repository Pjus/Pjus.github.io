const loginBtn = document.querySelector('#login-button');

const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector("div#greet");
const toDo = document.querySelector("form#todo-form")

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const saved = localStorage.getItem(USERNAME_KEY)


function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    toDo.classList.remove(HIDDEN_CLASSNAME);
    const userName = loginInput.value;
    localStorage.setItem(USERNAME_KEY, userName);
    paintGreeting(userName);

}

function paintGreeting(userName){
    greeting.innerText = `Hello ${userName}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    loginBtn.classList.add(HIDDEN_CLASSNAME);
}

if (saved === null){
    // show
    loginBtn.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{
    // hide
    paintGreeting(saved);
    toDo.classList.remove(HIDDEN_CLASSNAME);

}

function goLogin(event){
    event.preventDefault();
    loginBtn.classList.add(HIDDEN_CLASSNAME);
    loginForm.classList.remove(HIDDEN_CLASSNAME);
}


loginBtn.addEventListener("click", goLogin)