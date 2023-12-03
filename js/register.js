let registerBtn = document.getElementById('registerBtn');
let loginBtn = document.getElementById('loginBtn');
let nameField = document.getElementById('nameField');
let title = document.getElementById('title');

loginBtn.onclick = function () {
    nameField.style.maxHeight = "0";
    title.innerHTML = 'Log In'
    registerBtn.classList.add("disable");
    loginBtn.classList.remove("disable");
}

registerBtn.onclick = function () {
    nameField.style.maxHeight = "65px";
    title.innerHTML = 'Register'
    registerBtn.classList.remove("disable");
    loginBtn.classList.add("disable");
}


