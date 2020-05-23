var accardionTitle = document.getElementsByClassName("accordion_item_title"),
  contentAccardion = document.getElementsByClassName("accordion_item_paragraph");

for (var i = 0; i < accardionTitle.length; i++) {
  accardionTitle[i].addEventListener("click", function () {
    if (!(this.classList.contains("accodrion_active"))) {
      for (var i = 0; i < accardionTitle.length; i++) {
        accardionTitle[i].classList.remove("accodrion_active");
      }
      this.classList.add("accodrion_active");
    }
  })
};