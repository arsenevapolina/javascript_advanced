"use strict";

function gameDice(diceType) {
  let min = 1;
  let max;

  switch (diceType) {
    case "d4":
      max = 4;
      break;
    case "d6":
      max = 6;
      break;
    case "d8":
      max = 8;
      break;
    case "d10":
      max = 10;
      break;
    case "d12":
      max = 12;
      break;
    case "d16":
      max = 16;
      break;
    case "d20":
      max = 20;
      break;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(gameDice("d4"));
console.log(gameDice("d12"));
