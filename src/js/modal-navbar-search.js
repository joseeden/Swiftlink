const searchModalEl = document.getElementById('navbar-search-modal');
const searchInput = document.getElementById('searchInput');
const navbarSearchTriggerLink = document.getElementById('open-search-modal');

// Handle Enter key
searchInput.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    e.preventDefault();

    // Blur the input and the navbar <a> trigger
    searchInput.blur();
    navbarSearchTriggerLink.blur();

    const modalInstance = bootstrap.Modal.getInstance(searchModalEl);
    modalInstance.hide();
  }
});

// Clear input + blur again just in case when modal closes
searchModalEl.addEventListener('hidden.bs.modal', function () {
  searchInput.value = '';
  navbarSearchTriggerLink.blur();
});
