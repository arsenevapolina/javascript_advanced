"use strict";

const months = document.querySelector(".months");
const days = document.querySelector(".days");
const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");
const seconds = document.querySelector(".seconds");
const newYear = new Date(2025, 0, 1, 0, 0, 0).getTime();
let timer;

function newYearTimer() {
  timer = setInterval(() => {
    const untilNewYear = new Date(newYear - new Date());
    const howMonth = untilNewYear.getMonth();
    const howDays = untilNewYear.getDate();
    const howHour = untilNewYear.getHours();
    const howMinute = untilNewYear.getMinutes();
    const howSeconds = untilNewYear.getSeconds();

    document.querySelector(".months").innerText = `${howMonth} месяцев`;
    document.querySelector(".days").innerText = `${howDays} дней`;
    document.querySelector(".hours").innerText = `${howHour} часов`;
    document.querySelector(".minutes").innerText = `${howMinute} минут`;
    document.querySelector(".seconds").innerText = `${howSeconds} секунд`;
  });

  setTimeout(() => {
    clearInterval(timer);
  }, newYear);
}

newYearTimer();
