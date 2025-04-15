/**==============================================================
 * Bootstrap 5.3 Offcanvas Sidebar Script
 *===============================================================
 *
 * This is suppose to be an improvement over the previous version
 * (custom-offcanvas-fix-4.js" since the previous version was 
 * affecting the dropdowns in the main navigation bar on 
 * normal screen sizes, specifically its interfering with normal 
 * Bootstrap dropdown behavior outside the offcanvas
 *
 * Purpose:
 * - Keep dropdowns open when clicked inside offcanvas.
 * - Close sidebar only when non-dropdown links or dropdown children are clicked.
 * - Ensure only one dropdown is expanded at a time.
 * - Reset toggler state and removes backdrop when sidebar is closed.
 * - Collapses any expanded dropdowns when sidebar is closed.
 * 
 * The logic here is to only run the script when:
 * - Screen width is ≤1129px
 *===============================================================
 */

 document.addEventListener("DOMContentLoaded", function () {
  // Run only when screen width is 1129px or less
  if (window.innerWidth <= 1129) {
    const sidebar = document.querySelector(".offcanvas");

    if (!sidebar) return;

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

    function collapseAllDropdowns() {
      sidebar.querySelectorAll(".dropdown.show").forEach(dropdown => {
        dropdown.classList.remove("show");
        const menu = dropdown.querySelector(".dropdown-menu");
        if (menu) menu.classList.remove("show");
      });
    }

    function closeSidebar() {
      collapseAllDropdowns();
      bsOffcanvas.hide();
    }

    sidebar.addEventListener("hidden.bs.offcanvas", function () {
      resetToggler();
      enableScroll();
      removeBackdrop();
      collapseAllDropdowns();
    });

    if (closeBtn) closeBtn.addEventListener("click", closeSidebar);

    navLinks.forEach(link => {
      const isDropdownToggle = link.classList.contains("dropdown-toggle");

      if (!isDropdownToggle) {
        link.addEventListener("click", closeSidebar);
      } else {
        link.addEventListener("click", function (e) {
          e.preventDefault();
          e.stopPropagation();

          const currentDropdown = link.closest(".dropdown");

          sidebar.querySelectorAll(".dropdown.show").forEach(dropdown => {
            if (dropdown !== currentDropdown) {
              dropdown.classList.remove("show");
              const menu = dropdown.querySelector(".dropdown-menu");
              if (menu) menu.classList.remove("show");
            }
          });

          const menu = currentDropdown.querySelector(".dropdown-menu");
          const isExpanded = currentDropdown.classList.contains("show");
          currentDropdown.classList.toggle("show", !isExpanded);
          if (menu) menu.classList.toggle("show", !isExpanded);
        });
      }
    });
  }
});
