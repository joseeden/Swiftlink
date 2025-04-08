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
