/**==============================================================
 * This is a temporary fix until the issue is resolved.
 * ==============================================================
 *
 * This is a workaround for a responsive bug where 
 * offcanvas overflows between 992px and 1129px screen widths.
 *
 * It adds a class to the body when the offcanvas is open
 * and then removes it when the offcanvas is closed.
 *
 * The class added is 'custom-offcanvas-fix'.
 * This class is used in the CSS to prevent overflow issue.
 * This script should be included after the Bootstrap JS file.
 * ==============================================================
 */

// Check if DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', function() {
  // Check if Bootstrap's Offcanvas is available
  if (typeof bootstrap.Offcanvas === 'undefined') {
    console.error('Bootstrap Offcanvas is not available. Please ensure Bootstrap JS is included.');
    return;
  }
});

// Initialize the Offcanvas component
const offcanvasElement = document.querySelector('.offcanvas');

if (offcanvasElement) {
  const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
}

if (navbarOffcanvas) {
  const navbarOffcanvasInstance = new bootstrap.Offcanvas(navbarOffcanvas);
}

const navbarOffcanvas = document.getElementById('navbarOffcanvas');
  
function applyOffcanvasFixes() {
  if (window.innerWidth >= 992 && window.innerWidth <= 1129) {
    document.body.classList.add('custom-offcanvas-fix');
  }
}

function removeOffcanvasFixes() {
  document.body.classList.remove('custom-offcanvas-fix');
}

// Event listeners for when offcanvas opens and closes
navbarOffcanvas.addEventListener('shown.bs.offcanvas', applyOffcanvasFixes);
navbarOffcanvas.addEventListener('hidden.bs.offcanvas', removeOffcanvasFixes);