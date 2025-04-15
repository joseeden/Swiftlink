/**==============================================================
 * Bootstrap 5.3 Offcanvas Sidebar Script
 *===============================================================
 *
 * Purpose:
 * - Keeps dropdowns open when clicked inside offcanvas.
 * - Closes the sidebar only when non-dropdown links is clicked.
 * - Closes the sidebar only when dropdown children is clicked.
 * - Resets toggler state and removes backdrop when sidebar is closed.
 *===============================================================
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
    removeBackdrop(); // Cleans up ghost backdrop
  });

  // Close button always closes sidebar
  if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

  // Handle nav link clicks
  navLinks.forEach(link => {
    link.addEventListener("click", function (e) {
      const isDropdownToggle = link.classList.contains("dropdown-toggle");

      if (!isDropdownToggle) {
        // It's a regular link or dropdown item → close sidebar
        closeSidebar();
      } else {
        // Prevent sidebar from closing when clicking dropdown toggle
        e.preventDefault();
        e.stopPropagation();
        // Let Bootstrap handle dropdown toggle normally
      }
    });
  });
});
