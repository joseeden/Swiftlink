// Get modal section and open button
const modal = document.getElementById('modal-navbar-login');
const openModalBtn = document.getElementById('open-login-modal');  
const closeModalBtn = document.getElementById('close-login-modal');

// Panel switching
const loginPanel = document.getElementById('login-panel');
const signupPanel = document.getElementById('signup-panel');

// Show modal when "Login" is clicked
openModalBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  modal.style.display = 'block';

  // Always reset to Login panel on modal open
  loginPanel.classList.add('active');
  signupPanel.classList.remove('active');
});

// Hide modal when close button is clicked
closeModalBtn.addEventListener('click', function() {
  modal.style.display = 'none';
  resetModalFields(); // Reset fields when modal is closed
});

// Hide the modal if user clicks outside of modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; 
    resetModalFields(); // Reset fields when modal is closed
  }
});

// Handle switching between login and signup panels
document.getElementById('login-modal-signup-link').addEventListener('click', function(e) {
  e.preventDefault();
  loginPanel.classList.remove('active');
  signupPanel.classList.add('active');
});

document.getElementById('signup-modal-login-link').addEventListener('click', function(e) {
  e.preventDefault();
  signupPanel.classList.remove('active');
  loginPanel.classList.add('active');
});

// Handle the "Continue" button click
const continueButton = document.querySelector('.login-modal-button');
continueButton.addEventListener('click', function(e) {
  e.preventDefault(); // Prevent default button action

  // Find the username input field
  const usernameField = loginPanel.querySelector('input[type="text"]');
  
  // Check if the username field is empty
  if (usernameField && usernameField.value.trim() === '') {
    usernameField.setCustomValidity('Please fill out this field'); // Set custom validity message
    usernameField.reportValidity(); // Trigger the validity check and display message
    return; // Exit function without closing modal if empty
  }

  // If username is not empty, hide the modal
  modal.style.display = 'none';
  resetModalFields(); // Reset fields when modal is closed
});

// Function to reset all input fields in the modal
function resetModalFields() {
  const inputs = modal.querySelectorAll('input');
  inputs.forEach(input => {
    input.value = ''; // Clear the value of each input field
    input.classList.remove('is-invalid', 'is-valid'); // Remove any validation feedback
    input.setCustomValidity(''); // Reset custom validity
  });
}
