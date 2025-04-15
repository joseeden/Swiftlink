/**==============================================================
 * Toggle Dropdown Visibility
 *===============================================================
 *
 * This script toggles the visibility of a dropdown and its wrapper
 * based on the state of a checkbox toggle.
 * 
 * - Shows or hides the dropdown based on checkbox state
 * - Adjusts display and visibility of dropdown and its wrapper
 *===============================================================
 */

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
