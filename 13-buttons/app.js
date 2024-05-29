"use strict";

function clickOnTheButton() {
  const buttons = document.querySelector(".wrapper__buttons");
  const counter = document.querySelector(".clicks__number");
  const reset = document.querySelector(".reset__counter");
  let clicksNumber = 0;

  buttons.addEventListener("click", function (event) {
    clicksNumber++;
    counter.innerHTML = clicksNumber;

    for (const button of [...buttons.children]) {
      button.innerHTML = "Нажми меня";
    }

    event.target.innerHTML = "Нажата!";
  });

  reset.addEventListener("click", function (event) {
    clicksNumber = 0;
    counter.innerHTML = clicksNumber;
  });
}

clickOnTheButton();
