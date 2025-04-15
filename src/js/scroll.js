/**==============================================================
 * Smooth Scroll for Navbar Anchor Links
 *===============================================================
 * 
 * This script enables smooth scrolling when clicking anchor links
 * in the navbar, and adjusts for fixed header height.
 * 
 * - Scrolls smoothly to target section
 * - Applies vertical offset for fixed navbar
 * - Prevents default jump behavior
 * - Targets only internal anchor links
 * 
 * This improves UX by avoiding abrupt jumps when navigating.
 *===============================================================
 */

document.querySelectorAll('.navbar a[href^="#"]').forEach(link => {
  link.addEventListener('click', function (event) {
    const sectionId = this.getAttribute('href').substring(1);
    const target = document.getElementById(sectionId);
    const yOffset = -100;

    if (target) {
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      event.preventDefault();
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  });
});
