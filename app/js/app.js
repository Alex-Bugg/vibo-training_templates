let toggleBurger = document.querySelector('.navigation__button_burger');
let navHeader = document.querySelector('.main_header_navigation');

toggleBurger.onclick = function () {
  toggleBurger.classList.toggle("toggle_active");
  navHeader.classList.toggle("toggle_active");
};