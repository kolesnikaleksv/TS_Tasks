"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
let myCar = class myCar {
    fuel = '50%';
    open = true;
    errors;
    freeSeats = 3;
    isOpen(value) {
        return this.open ? 'open' : `close ${value}`;
    }
};
__decorate([
    checkNumberOfSeats(4),
    __metadata("design:type", Number)
], myCar.prototype, "freeSeats", void 0);
__decorate([
    checkAmountOfFuel,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], myCar.prototype, "isOpen", null);
myCar = __decorate([
    changeDoorStatus(false),
    changeAmountOfFuel(95)
], myCar);
function checkNumberOfSeats(limit) {
    return function (target, context) {
        return function (newAmount) {
            if (newAmount >= 1 && newAmount < limit) {
                return newAmount;
            }
            else {
                throw Error(`Больше ${limit} сидений быть не может, меньше 1 тоже`);
            }
        };
    };
}
function checkAmountOfFuel(target, context) {
    return function (...args) {
        // console.log(this.fuel);
        console.log(`${String(context.name)} был запущен`);
        return target.apply(this, args);
    };
}
function changeDoorStatus(status) {
    console.log('door init');
    return (target, context) => {
        console.log('door changed');
        return class extends target {
            open = status;
        };
    };
}
function changeAmountOfFuel(amount) {
    console.log('fuel init');
    return (target, context) => {
        console.log('fuel changed');
        return class extends target {
            fuel = `${amount}%`;
        };
    };
}
const car = new myCar();
car.freeSeats = -1;
console.log(car);
console.log(car.errors);
// f(x(y()));
