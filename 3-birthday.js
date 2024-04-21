"use strict";

function checkAge(user) {
  const birthDate = new Date(user.birthday);
  const now = new Date();

  let userAge = now.getFullYear() - birthDate.getFullYear();

  if (
    now.getMonth() < birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() &&
      now.getDate() < birthDate.getDate())
  ) {
    userAge--;
  }
  return userAge >= 14;
}

const userOne = {
  name: "someone",
  birthday: "2010-12-01",
};
const userTwo = {
  name: "someone",
  birthday: "2010-01-01",
};

console.log(checkAge(userOne));
console.log(checkAge(userTwo));
