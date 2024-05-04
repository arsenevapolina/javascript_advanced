"use strict";

class Car {
  #brand;
  #model;
  #miles;

  constructor(brand, model, miles) {
    this.#brand = brand;
    this.#model = model;
    this.#miles = Number(miles);
  }
  set addMiles(miles) {
    this.#miles += miles;
  }

  get showMiles() {
    return `Car mileage is ${this.#miles} miles.`;
  }

  info() {
    return `Brand: ${this.#brand}. Model: ${this.#model}. Mileage: ${
      this.#miles
    } miles.`;
  }
}

const car = new Car("porsche", "panamera", "1000");
console.log(car);
car.addMiles = 500;
console.log(car.showMiles);
console.log(car.info());
console.log(car);
