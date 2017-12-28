var open = document.querySelector(".mobile-menu__items-btn");
var popup = document.querySelector(".mobile-menu");
var close = popup.querySelector(".mobile-menu__close-btn");
var focus = popup.querySelector("[name=name]");

open.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.toggle("element-switch--off");
  popup.classList.toggle("element-switch--off");
  close.classList.toggle("element-switch--off");
});

close.addEventListener("click", function(event) {
  event.preventDefault();
  open.classList.toggle("element-switch--off");
  popup.classList.toggle("element-switch--off");
  close.classList.toggle("element-switch--off");
});
