"use strict";

class Billing {
  amount;
  constructor(amount) {
    this.amount = amount;
  }

  calculateTotal() {
    return console.log(`${this.amount}`);
  }
}

class FixBilling extends Billing {
  constructor(amount) {
    super(amount);
  }

  calculateTotal() {
    return console.log(`${this.amount}`);
  }
}

class HourBilling extends Billing {
  hour;
  constructor(amount, hour) {
    super(amount);
    this.hour = hour;
  }

  calculateTotal() {
    return console.log(`${this.amount * this.hour}`);
  }
}

class ItemBilling extends Billing {
  item;
  constructor(amount, item) {
    super(amount);
    this.item = item;
  }

  calculateTotal() {
    return console.log(`${this.amount * this.item}`);
  }
}

const billing = new Billing(100);
console.log(billing);
billing.calculateTotal();

const fixBilling = new FixBilling(100);
console.log(fixBilling);
fixBilling.calculateTotal();

const hourBilling = new HourBilling(100, 8);
console.log(hourBilling);
hourBilling.calculateTotal();

const itemBilling = new ItemBilling(100, 5);
console.log(itemBilling);
itemBilling.calculateTotal();
