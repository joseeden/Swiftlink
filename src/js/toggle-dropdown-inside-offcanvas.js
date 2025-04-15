/**==============================================================
 * Enable Clickable Dropdowns in Offcanvas Navbar (Mobile)
 *===============================================================
 *
 * On mobile, Bootstrap offcanvas navbars do not support automatic
 * dropdown behavior due to missing PopperJS positioning context.
 *
 * This script enables manual toggling of dropdown menus inside
 * the offcanvas sidebar by:
 * - Preventing default link behavior
 * - Toggling `.show` classes on `.dropdown`
 * - Toggling `.show` classes on `.dropdown-menu`
 *
 * This replaces Bootstrap's hover logic with click-based logic 
 * for dropdowns.
 *===============================================================
 */

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