let select = function () {
  'use strict';

  let topBtn = document.querySelector(".btnup");

  function trackScroll() {
    let scrolled = window.pageYOffset;
    let coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
      topBtn.style.display = "block";
    }
    if (scrolled < coords) {
      topBtn.style.display = "none";
    }
  }

  function backToTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -10);
      setTimeout(backToTop, 0);
    }
  }

  window.addEventListener("scroll", trackScroll);
  topBtn.addEventListener("click", backToTop);
};

select();