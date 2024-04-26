"use strict";

const arrOfObj = [
  { id: 1, name: "Вася" },
  { id: 2, name: "Петя" },
  { id: 1, name: "Вася" },
];

const arrOfObjSet = Array.from(
  new Set(
    arrOfObj
      .map((obj) => obj.id)
      .map((id) => arrOfObj.find((obj) => obj.id === id))
  )
);
console.log(arrOfObjSet);
