
// This script is used on mobile view, when the navbar items are collapsed into
// and is only accesible when the toggler-icon is clicked.
// In my website setup, the navbar items "slides" to the right.
// This sidebar is implemented using offcanvas, and the navbar items are listed in the sidebar.
// However, Bootstrap doesn't auto open items which are dropdowns inside offcanvas
// without PopperJS positioning.
// As workaround, this script toggles dropdowns manually 
// when clicked from inside the offcanvas

// This overrides Bootstrap’s default hover-based behavior 
// inside the offcanvas and turns them into click-based toggles.

document.addEventListener('DOMContentLoaded', function () {
  const dropdownToggles = document.querySelectorAll('#navbarOffcanvas .dropdown-toggle');

  dropdownToggles.forEach(toggle => {
    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      const parent = this.closest('.dropdown');
      parent.classList.toggle('show');

      const menu = parent.querySelector('.dropdown-menu');
      if (menu) {
        menu.classList.toggle('show');
      }
    });
  });
});