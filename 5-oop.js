"use strict";

// Basic character

const Character = function (race, name, lang) {
  this.race = race;
  this.name = name;
  this.lang = lang;
};

Character.prototype.speak = function () {
  console.log(`Hello! I am a ${this.name}. I can speak ${this.lang}.`);
};

const Hobbit = new Character("hobbit", "Bilbo", "english");
console.log(Hobbit);
Hobbit.speak();

// Orc

const Orc = function (race, name, lang) {
  Character.call(this, race, name, lang);
  this.hasGun = true;
};

Orc.prototype.hit = function (hasGun) {
  if (hasGun) {
    console.log("Be careful! I have a gun!");
  } else {
    console.log("I lost my gun(");
  }
};

const Goblin = new Orc("orc", "Goblin", "orcLang");
console.log(Goblin);
Goblin.hit((Goblin.hasGun = false));

// Elf

const Elf = function (race, name, lang) {
  Character.call(this, race, name, lang);
  this.spells = ["time", "water", "fire", "speed"];
};

Elf.prototype.spell = function (spell) {
  this.spells.find((el) => {
    if (el === spell) {
      console.log(`I can use ${el}!`);
    }
  });
};

const Glorfindel = new Elf("elf", "Glorfindel", "elfLang");
console.log(Glorfindel);
Glorfindel.spell("water");
