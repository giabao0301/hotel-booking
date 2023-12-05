const registerForm = document.getElementById('register_form')

registerForm.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission
    const email = document.getElementById('register_email').value;
    const password = document.getElementById('register_pass').value;
    const userName = document.getElementById('register_username').value

    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    var isEmailRegistered = registeredUsers.some(function (user) {
        return user.email === email;
    });
    console.log('register called');

    if (!isEmailRegistered) {
        // Add the new user to the list of registered users
        registeredUsers.push({ username: userName, email: email, password: password });
        localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

        // Redirect to the desired page or display a success message
        alert('Registration successful!');
        window.location.href = 'login_demo.html';
    } else {
        // Email is already registered, display error message
        alert('This email is already registered. Please use a different email.');
    }
    // Add your desired logic here

    // Get input values

    // Get other required field values here

    // Check if the entered email is already registered

});