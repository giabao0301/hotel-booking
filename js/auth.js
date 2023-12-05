var isAuthenticated = sessionStorage.getItem('authenticated') === 'true';

// Function to dynamically change the register button content based on authentication state
function updateRegisterButton() {
  var registerButton = document.getElementById('register_btn');
  console.log('check authentication');
  // If authenticated, change the content to a user icon
  if (isAuthenticated) {
    registerButton.innerHTML = '<i class="fas fa-user"></i> User Account';
    registerButton.href = 'user_info.html'
  } else {
    registerButton.innerHTML = 'Register Now';
    registerButton.href = 'register_demo.html'
  }
}

// Call the function when the page loads
updateRegisterButton();