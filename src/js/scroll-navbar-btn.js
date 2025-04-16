/**
 *==============================================================
 * Smooth Scroll for All Internal Anchor Links
 *==============================================================
 * 
 * - Works for links in navbar and elsewhere (e.g., buttons)
 * - Smoothly scrolls to anchor targets with vertical offset
 * - Accounts for fixed header height (100px offset)
 *==============================================================
 */

 document.querySelectorAll('a[href^="#"]').forEach(link => {
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
