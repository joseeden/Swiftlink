document.getElementById('open-login-modal-btn').addEventListener('click', function () {
  document.getElementById('modal-navbar-login').style.display = 'block';
});

// Optional: close modal when clicking the close button
document.getElementById('close-login-modal').addEventListener('click', function () {
  document.getElementById('modal-navbar-login').style.display = 'none';
});