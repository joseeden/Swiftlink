document.addEventListener("DOMContentLoaded", () => {
  const signupLink = document.getElementById("login-modal-signup-link");
  const signupModal = document.getElementById("modal-navbar-signup");
  const closeSignup = document.getElementById("close-signup-modal");

  signupLink.addEventListener("click", (e) => {
    e.preventDefault();
    signupModal.classList.add("active");
  });

  closeSignup.addEventListener("click", () => {
    signupModal.classList.remove("active");
  });
});
