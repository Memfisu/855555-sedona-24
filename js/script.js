var link = document.querySelector(".button-search-change");
    var popup = document.querySelector(".modal-accomodation-search");
    var datein = popup.querySelector("[name=date-in]");
    var dateout = popup.querySelector("[name=date-out]");
    var adults = popup.querySelector("[name=adults]");
    var children = popup.querySelector("[name=children]");
    var form = popup.querySelector("search-form");

    var isStorageSupport = true;
  var storage = "";
  
  try {
    storage = localStorage.getItem("adults");
    storage = localStorage.getItem("children");
  } catch (err) {
    isStorageSupport = false;
  }

    link.addEventListener("click", function (evt) {
      evt.preventDefault();
      popup.classList.toggle("modal-show");

      if (storage) {
        adults.value = storage;
        children.value = storage;
    }

      datein.focus();
});

form.addEventListener("submit", function (evt) {
  if (!datein.value || !dateout.value || !adults.value || !children.value) {
      evt.preventDefault();
      console.log("Пожалуйста, введите даты и количество взрослых и детей");
    }
    else {
      if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
      }
    }
  });