document.getElementById('login_form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var email = document.getElementById('login_email').value;
    var password = document.getElementById('login_pass').value;

    // Check if the entered email and password match any registered user
    var registeredUsers = JSON.parse(localStorage.getItem('registeredUsers') || '[]');
    var matchedUser = registeredUsers.find(function (user) {
        return user.email === email && user.password === password;
    });

    if (matchedUser) {
        // Redirect to the desired page or display a success message
        // alert('Login successful!');
        sessionStorage.setItem('authenticated', 'true');
        sessionStorage.setItem('userEmail', email)
        window.location.href = 'index.html';
    } else {
        // Invalid credentials, display an error message
        alert('Invalid email or password. Please try again.');
    }
});