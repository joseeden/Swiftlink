// Close modal when either "Continue" or "Sign Up" button is clicked
document.querySelectorAll('.login-modal-button').forEach(button => {
  button.addEventListener('click', function(e) {
    e.preventDefault(); // Optional: if forms are not being submitted
    modal.style.display = 'none';
  });
});


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
});

// Hide the modal if user clicks outside of modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none'; 
  }
});

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
