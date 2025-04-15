/**==============================================================
 * Bootstrap 5.3 Offcanvas Sidebar Script
 *===============================================================
 *
 * Purpose:
 * - Keep dropdowns open when clicked inside offcanvas.
 * - Close sidebar only when non-dropdown links or dropdown children are clicked.
 * - Ensure only one dropdown is expanded at a time.
 * - Reset toggler state and removes backdrop when sidebar is closed.
 * - Collapses any expanded dropdowns when sidebar is closed.
 *===============================================================
 */

 const dropdownToggle = document.querySelector('.dropdown-toggle');
 const dropdownMenu = document.querySelector('.dropdown-menu');
 dropdownToggle.addEventListener('click', function () {
   dropdownMenu.classList.toggle('show');
 });
 
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
 
   // Function to collapse all dropdowns inside the sidebar
   function collapseAllDropdowns() {
     sidebar.querySelectorAll(".dropdown.show").forEach(dropdown => {
       dropdown.classList.remove("show");
       const menu = dropdown.querySelector(".dropdown-menu");
       if (menu) menu.classList.remove("show");
     });
   }
 
   function closeSidebar() {
     collapseAllDropdowns();  // Collapse dropdowns when closing the sidebar
     bsOffcanvas.hide();
   }
 
   sidebar.addEventListener("hidden.bs.offcanvas", function () {
     resetToggler();
     enableScroll();
     removeBackdrop();        // Cleans up ghost backdrop
     collapseAllDropdowns();  // Collapse dropdowns when sidebar is closed
   });
 
   if (closeBtn) closeBtn.addEventListener("click", closeSidebar);
 
   navLinks.forEach(link => {
     link.addEventListener("click", function (e) {
       const isDropdownToggle = link.classList.contains("dropdown-toggle");
 
       if (!isDropdownToggle) {
         // Regular link or dropdown child → close sidebar
         closeSidebar();
       } else {
         // It's a dropdown toggle → allow toggle, but collapse others
         e.preventDefault();
         e.stopPropagation();
 
         const currentDropdown = link.closest(".dropdown");
 
         // Collapse other open dropdowns
         sidebar.querySelectorAll(".dropdown.show").forEach(dropdown => {
           if (dropdown !== currentDropdown) {
             dropdown.classList.remove("show");
             const menu = dropdown.querySelector(".dropdown-menu");
             if (menu) menu.classList.remove("show");
           }
         });
 
         // Toggle current dropdown
         const menu = currentDropdown.querySelector(".dropdown-menu");
         const isExpanded = currentDropdown.classList.contains("show");
         currentDropdown.classList.toggle("show", !isExpanded);
         if (menu) menu.classList.toggle("show", !isExpanded);
       }
     });
   });
 });
 