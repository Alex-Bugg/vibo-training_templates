let toggleBurger = document.querySelector('.navigation__button_burger');
let navHeader = document.querySelector('.main_header_navigation');

toggleBurger.onclick = function () {
  toggleBurger.classList.toggle("toggle_active");
  navHeader.classList.toggle("toggle_active");
};

let accBlock = document.querySelectorAll('.accordion_item');
for (var i = 0; i < accBlock.length; i++) {
  accBlock[i].onclick = function () {
    this.classList.toggle('accordion_active');
    var content = this.querySelector('.accordion__content');
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 'px'
    }
  }
};