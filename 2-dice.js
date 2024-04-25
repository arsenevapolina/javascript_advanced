"use strict";

function gameDice(diceType) {
  const diceValues = {
    d4: 4,
    d6: 6,
    d8: 8,
    d10: 10,
    d12: 12,
    d16: 16,
    d20: 20,
  };

  const max = diceValues[diceType];
  const min = 1;

  if (Number(max)) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return "Сделайте новый бросок";
  }
}

console.log(gameDice("d4"));
console.log(gameDice("d12"));
