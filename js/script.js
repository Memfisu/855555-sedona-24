var link = document.querySelector(".button-search-change");
var popup = document.querySelector(".search-form");
var datein = popup.querySelector("[name=date-in]");
var dateout = popup.querySelector("[name=date-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");
var form = document.querySelector(".search-form");

var isStorageSupport = true;
var storage = "";

popup.classList.add("modal-show");

try {
  storage = localStorage.getItem("adults");
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("modal-error");
  popup.classList.toggle("modal-show");
  popup.classList.toggle("animation-show");
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
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});
