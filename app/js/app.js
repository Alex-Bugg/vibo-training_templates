let toggleBurger = document.querySelector('.navigation__button_burger');
let navHeader = document.querySelector('.main_header_navigation');

toggleBurger.onclick = function () {
  toggleBurger.classList.toggle("toggle_active");
  navHeader.classList.toggle("toggle_active");
};

let accBtn = document.querySelectorAll('.accordion_title');

document.querySelectorAll('.accordion_title').forEach((item) =>
  item.addEventListener('click', () => {
    const parent = item.parentNode;

    if (parent.classList.contains('accordion_active')) {
      parent.classList.remove('accordion_active');
    } else {
      document.querySelectorAll('.accordion_item')
        .forEach((child) => child.classList.remove('accordion_active'));

      parent.classList.add('accordion_active')
    }
  })
);