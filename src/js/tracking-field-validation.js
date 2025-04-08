document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleReference");
  const referenceInput = document.getElementById("referenceInput");
  const referenceDropdownWrapper = document.getElementById("referenceDropdownWrapper");
  const referenceDropdown = document.getElementById("referenceDropdown");
  const searchButton = document.getElementById("searchButton");

  // Toggle dropdown visibility based on the toggle state
  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      referenceDropdownWrapper.style.display = "block";
      referenceDropdown.style.visibility = "visible";
    } else {
      referenceDropdownWrapper.style.display = "none";
      referenceDropdown.style.visibility = "hidden";
    }
  });

  // Search button - validate fields
  searchButton.addEventListener("click", function () {
    
    // Reset previous error states
    referenceInput.classList.remove("is-invalid");
    referenceDropdown.classList.remove("is-invalid");

    // Handle validation when Search is clicked
    if (referenceInput.value.trim() === "") {
      referenceInput.classList.add("is-invalid");
    }

    if (toggle.checked) {
      if (referenceDropdown.value === "") {
        referenceDropdown.classList.add("is-invalid");
      }
    }
  });
});
