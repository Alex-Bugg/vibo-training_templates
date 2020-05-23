$(document).ready(function () {
  $(".navigation__button_burger").click(function (event) {
    $(".main_header_navigation, .navigation__button_burger").toggleClass("toggle_active");
  });
});