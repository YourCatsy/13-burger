'use strict';

class Hamburger {
    constructor(size) {
        this.#baseSize = size;
    }

    #baseSize = {
        price: 0,

        callories: 0,
    };

    #toppings = [];

    static SIZE_SMALL = {
        price: 50,

        callories: 20,
    };

    static SIZE_MEDIUM = {
        price: 75,

        callories: 30,
    };

    static SIZE_BIG = {
        price: 100,

        callories: 40,
    };

    static TOPPING_CHEESE = {
        price: 10,

        callories: 20,
    };

    static TOPPING_MAYO = {
        price: 20,

        callories: 5,
    };
    static TOPPING_SALADE = {
        price: 20,

        callories: 5,
    };

    static TOPPING_POTATO = {
        price: 15,

        callories: 10,
    };

    static TOPPING_FLAVORING = {
        price: 15,

        callories: 0,
    };

    getPrice() {
        return this.getSum('price');
    }

    getCallories() {
        return this.getSum('callories');
    }

    getSum(propertyName) {
        return this.#baseSize[propertyName] + this.#toppings.reduce((previous, current) => {
            return previous + current[propertyName];
        }, 0);
    }

    addTopping(topping) {
        if (topping && this.isNotSize(topping) && this.isToppingValid(topping)) {
            this.#toppings.push(topping);
        }
    }

    isNotSize(object) {
        return object !== Hamburger.SIZE_BIG && object !== Hamburger.SIZE_MEDIUM && object !== Hamburger.SIZE_SMALL;
    }

    isToppingValid(topping) {
        return this.validPositiveNumberProperty(topping, 'price') && this.validPositiveNumberProperty(topping, 'callories');
    }

    validPositiveNumberProperty(topping, propertyName) {
        return topping.hasOwnProperty(propertyName) && !isNaN(topping[propertyName]) && topping[propertyName] >= 0;
    }
}

let hamburger = new Hamburger(Hamburger.SIZE_BIG);

hamburger.addTopping(Hamburger.TOPPING_MAYO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

hamburger.addTopping(Hamburger.TOPPING_POTATO);

console.log('Price with sauce: ' + hamburger.getPrice());

console.log('Callories with sauce: ' + hamburger.getCallories());