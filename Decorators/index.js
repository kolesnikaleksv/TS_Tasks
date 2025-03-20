"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const limitMetadataKey = Symbol('limit');
@changeDoorStatus(false)
@changeAmountOfFuel(95)
class myCar {
    fuel = '50%';
    open = true;
    test;
    constructor(
    @limit()
    test) {
        this.test = test;
    }
    @checkNumberOfSeats(4)
    freeSeats;
    // @checkAmountOfFuel()
    isOpen(value) {
        return this.open ? 'open' : `close ${value}`;
    }
    @validate()
    startTravel(
    @limit()
    passengers) {
        console.log(`Started with ${passengers} passengers`);
    }
}
function limit() {
    console.log('Init: Parameter Decorator');
    return (target, propertyKey, parameterIndex) => {
        console.log('Call: Parameter Decorator');
        let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey) || [];
        limitedParametrs.push(parameterIndex);
        Reflect.defineMetadata(limitMetadataKey, limitedParametrs, target, propertyKey);
    };
}
function validate() {
    console.log('Init: Method Decorator');
    return (target, propertyKey, descriptor) => {
        console.log('Call: Method Decorator');
        let method = descriptor.value;
        descriptor.value = function (...args) {
            let limitedParametrs = Reflect.getOwnMetadata(limitMetadataKey, target, propertyKey);
            if (limitedParametrs) {
                for (let index of limitedParametrs) {
                    if (args[index] > 4) {
                        throw new Error('Нельзя больше 4х пассажиров');
                    }
                }
            }
            return method?.apply(this, args);
        };
    };
}
function checkNumberOfSeats(limit) {
    console.log('Init: Property Decorator');
    return function (target, propertyKey) {
        console.log('Call: Property Decorator');
        let symbol = Symbol();
        const getter = function () {
            return this[symbol];
        };
        const setter = function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                this[symbol] = newAmount + 1;
            }
            else {
                // console.log(`Больше ${limit} сидений быть не может`);
                Object.defineProperty(target, 'errors', {
                    value: `Больше ${limit} сидений быть не может`,
                });
            }
        };
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter,
        });
    };
}
function checkAmountOfFuel() {
    console.log('Init: Method Decorator');
    return (target, propertyKey, descriptor) => {
        console.log('Call: Method Decorator');
        const oldValue = descriptor.value;
        descriptor.value = function (...args) {
            console.log(this.fuel);
            return oldValue.apply(this, args);
        };
    };
}
function changeDoorStatus(status) {
    console.log('Init: Class Decorator Door');
    return (constructor) => {
        console.log('Call: Class Decorator Door');
        return class extends constructor {
            open = status;
        };
    };
}
function changeAmountOfFuel(amount) {
    console.log('Init: Class Decorator Fuel');
    return (constructor) => {
        console.log('Call: Class Decorator Fuel');
        return class extends constructor {
            fuel = `${amount}%`;
        };
    };
}
const car = new myCar(3);
car.startTravel(3);
// console.log(car);
// f(x(y()));
