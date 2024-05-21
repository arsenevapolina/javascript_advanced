"use strict";

// Basic character

class Character {
  race;
  name;
  lang;
  constructor(race, name, lang) {
    this.race = race;
    this.name = name;
    this.lang = lang;
  }

  speak() {
    console.log(`Hello! I am a ${this.name}. I can speak ${this.lang}.`);
  }
}

const Hobbit = new Character("hobbit", "Bilbo", "english");
console.log(Hobbit);
Hobbit.speak();

// Orc

class Orc extends Character {
  hasGun = true;
  constructor(race, name, lang) {
    super(race, name, lang);
  }

  hit(hasGun) {
    if (hasGun) {
      console.log("Be careful! I have a gun!");
    } else {
      console.log("I lost my gun(");
    }
  }

  speak() {
    console.log(
      `Hello! I am a ${this.name}. I can speak ${this.lang} and have a gun.`
    );
  }
}

const Goblin = new Orc("orc", "Goblin", "orcLang");
console.log(Goblin);
Goblin.hit((Goblin.hasGun = false));
Goblin.speak();

// Elf

class Elf extends Character {
  spells = ["time", "water", "fire", "speed"];
  constructor(race, name, lang) {
    super(race, name, lang);
  }
  spell(spell) {
    this.spells.find((el) => {
      if (el === spell) {
        console.log(`I can use ${el}!`);
      }
    });
  }
  speak() {
    console.log(`Hello! I am a ${this.name}. I can speak ${this.lang} 
and use spells.`);
  }
}

const Glorfindel = new Elf("elf", "Glorfindel", "elfLang");
console.log(Glorfindel);
Glorfindel.spell("water");
Glorfindel.speak();
