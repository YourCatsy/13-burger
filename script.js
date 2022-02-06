'use strict';

function FastFood() {
    this.getCallories = function () {
        return this.getSum(FastFood.CALLORIES_FIELD);
    };
    this.getPrice = function () {
        return this.getSum(FastFood.PRICE_FIELD);
    };
    this.getSum = function (propertyName) {
        return this.baseSize[propertyName] + this.toppings.reduce((previous, current) => {
            return previous + current[propertyName];
        }, 0);
    };
    this.validPositiveNumberProperty = function (topping, propertyName) {
        return topping.hasOwnProperty(propertyName) && !isNaN(topping[propertyName]) && topping[propertyName] >= 0;
    };
    this.isToppingValid = function (topping) {
        return this.validPositiveNumberProperty(topping, FastFood.PRICE_FIELD) && this.validPositiveNumberProperty(topping, FastFood.CALLORIES_FIELD);
    };
    this.isNotSize = function (object) {
        return object !== Hamburger.SIZE_BIG && object !== Hamburger.SIZE_MEDIUM && object !== Hamburger.SIZE_SMALL;
    };
    this.addTopping = function (topping) {
        if (topping && this.isNotSize(topping) && this.isToppingValid(topping)) {
            this.toppings.push(topping);
        }
    };
}

FastFood.PRICE_FIELD = 'price';
FastFood.CALLORIES_FIELD = 'callories';

function Hamburger(size) {
    this.baseSize = {
        price: 0,
        callories: 0,
    };
    this.baseSize = size;
    this.toppings = [];
}

Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
};

Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30,
};

Hamburger.SIZE_BIG = {
    price: 100,
    callories: 40,
};

Hamburger.TOPPING_CHEESE = {
    price: 10,
    callories: 20,
};

Hamburger.TOPPING_MAYO = {
    price: 20,
    callories: 5,
};

Hamburger.TOPPING_SALADE = {
    price: 20,
    callories: 5,
};

Hamburger.TOPPING_POTATO = {
    price: 15,
    callories: 10,
};

Hamburger.TOPPING_FLAVORING = {
    price: 15,
    callories: 0,
};

Hamburger.prototype = new FastFood();

const hamburger = new Hamburger(Hamburger.SIZE_BIG);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());

console.log('Callories with sauce: ' + hamburger.getCallories());