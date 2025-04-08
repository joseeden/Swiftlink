document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("toggleReference");
  const dropdown = document.getElementById("referenceDropdown");
  const dropdownWrapper = document.getElementById("referenceDropdownWrapper");

  toggle.addEventListener("change", function () {
    if (toggle.checked) {
      dropdown.style.visibility = "visible";    // Make dropdown visible
      dropdownWrapper.style.display = "block";  
    } else {
      dropdown.style.visibility = "hidden";     // Make dropdown hidden
      dropdownWrapper.style.display = "none";   
    }
  });
});
