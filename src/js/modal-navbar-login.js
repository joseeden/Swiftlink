
// Get the modal section and the open button
const modal = document.getElementById('modal-navbar-login');
const openModalBtn = document.getElementById('open-login-modal');  
const closeModalBtn = document.getElementById('close-login-modal');

// Show modal when "Login" is clicked
openModalBtn.addEventListener('click', function(event) {
  event.preventDefault(); 
  modal.style.display = 'block';
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
