const email = sessionStorage.getItem('userEmail')
// Assuming you have a user object
var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
let matchedUser = registeredUsers.find(function (user) {
    return user.email === email;
});

console.log(email);
console.log(matchedUser);

// Display user information
document.getElementById('username').innerText = matchedUser.username;
document.getElementById('useremail').innerText = matchedUser.email;
document.getElementById('logout_btn').addEventListener('click', () => {
    console.log('on logout');
    sessionStorage.setItem('authenticated', 'false');
    sessionStorage.setItem('userEmail', '')
})