var open = document.querySelector(".mobile-menu__items-btn");
var popup = document.querySelector(".mobile-menu");
var close = popup.querySelector(".mobile-menu__close-btn");
var focus = popup.querySelector("[name=name]");

open.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.add("items-btn--off");
  popup.classList.add("mobile-menu-show");
  focus.focus();
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  popup.classList.remove("mobile-menu-show");
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (popup.classList.contains("modal-window-show")) {
      popup.classList.remove("modal-window-show");
      // popup.classList.add("mobile-menu__items-btn");
    }
  }
});
