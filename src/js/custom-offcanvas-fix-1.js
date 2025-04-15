/**==============================================================
 * Bootstrap 5.3 Offcanvas Sidebar Script
 * ==============================================================
 * 
 * This script is a workaround for cases where the backdrop 
 * remains visible (dimmed page) after the first time the 
 * sidebar is closed.
 * 
 * - Fix backdrop not disappearing after first close
 * - Reset toggle button state  when sidebar is closed
 * - Removes lingering dimmed backdrop (ghost backdrop) after sidebar is closed
 * - Re-enable scrolling when sidebar closes (in case Bootstrap fails to clean it up)
 * - Close sidebar when nav links or close button inside are clicked
 *
 * Manual backdrop removal is used due to inconsistent behavior 
 * observed on first close. This may slightly interfere with 
 * Bootstrap’s default backdrop handling, but helps
 * resolve visual glitches.
 * ==============================================================
 */

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".offcanvas");
  const toggler = document.querySelector('[data-bs-toggle="offcanvas"]');
  const closeBtn = sidebar.querySelector(".btn-close");
  const navLinks = sidebar.querySelectorAll("a.nav-link, .dropdown-item");
  const bsOffcanvas = bootstrap.Offcanvas.getOrCreateInstance(sidebar);

  function resetToggler() {
    if (toggler) {
      toggler.classList.add("collapsed");
      toggler.setAttribute("aria-expanded", "false");
    }
  }

  function enableScroll() {
    document.body.classList.remove("modal-open");
    document.body.style.overflow = "";
  }

  function removeBackdrop() {
    const backdrop = document.querySelector(".offcanvas-backdrop");
    if (backdrop) backdrop.remove();
  }

  function closeSidebar() {
    bsOffcanvas.hide();
  }

  sidebar.addEventListener("hidden.bs.offcanvas", function () {
    resetToggler();
    enableScroll();
    removeBackdrop(); // This cleans up the ghost backdrop issue
  });

  // Handle closing by close button or nav links
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
  navLinks.forEach(link => link.addEventListener("click", closeSidebar));

  // Optional: if users click the backdrop to close sidebar
  // the "hidden.bs.offcanvas" event sshould still fire.
}); 