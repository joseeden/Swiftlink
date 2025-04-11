document.addEventListener("DOMContentLoaded", function () {
  // Handle checkbox-based dropdowns (toggle visibility)
  const toggles = document.querySelectorAll(".toggle-reference");
  const containers = document.querySelectorAll(".reference-dropdown-wrapper");

  // Loop through each toggle to add event listeners for visibility toggling
  toggles.forEach((toggle, index) => {
    toggle.addEventListener("change", function () {
      // Show or hide based on checkbox state
      containers[index].style.display = this.checked ? "block" : "none"; 
    });
  });


  // Custom dropdown logic for both toggleable and always-visible dropdowns
  const customSelects = document.querySelectorAll(".custom-select");

  customSelects.forEach((selectWrapper) => {
    const select = selectWrapper.querySelector("select");
    const selected = document.createElement("div");
    selected.className = "select-selected";
    selected.textContent = select.options[select.selectedIndex].text;
    selectWrapper.appendChild(selected);

    const optionsList = document.createElement("div");
    optionsList.className = "select-items select-hide";

    for (let i = 1; i < select.options.length; i++) {
      const option = document.createElement("div");
      option.textContent = select.options[i].text;

      option.addEventListener("click", function () {
        select.selectedIndex = i;
        selected.textContent = this.textContent;

        const all = optionsList.querySelectorAll(".same-as-selected");
        all.forEach(el => el.classList.remove("same-as-selected"));
        this.classList.add("same-as-selected");

        optionsList.classList.add("select-hide");
        selected.classList.remove("select-arrow-active");
      });

      optionsList.appendChild(option);
    }

    selectWrapper.appendChild(optionsList);

    selected.addEventListener("click", function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      optionsList.classList.toggle("select-hide");
      this.classList.toggle("select-arrow-active");
    });
  });

  function closeAllSelect(current) {
    const allItems = document.querySelectorAll(".select-items");
    const allSelected = document.querySelectorAll(".select-selected");

    allItems.forEach((list, i) => {
      if (current !== allSelected[i]) {
        list.classList.add("select-hide");
        allSelected[i].classList.remove("select-arrow-active");
      }
    });
  }

  document.addEventListener("click", closeAllSelect);
});
