let select = function () {
  let selectBody = document.querySelector(".select__body");
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectBody.style.display = "none";

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToogle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToogle() {
    selectBody.style.display = "block";
  }

  function selectChoose() {
    selectBody.style.display = "none";
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
  }
};

select();