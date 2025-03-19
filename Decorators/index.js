"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let myCar = class myCar {
    fuel = '100%';
    freeSeats = 3;
    open = true;
    isOpen() {
        console.log(this.fuel);
        return this.open ? 'Open' : 'closed';
    }
};
myCar = __decorate([
    changeDoorStatus(false),
    changeAmountOfFuel(670)
], myCar);
function changeDoorStatus(status) {
    return (constructor) => {
        return class extends constructor {
            open = status;
        };
    };
}
function changeAmountOfFuel(amount) {
    return (constructor) => {
        return class extends constructor {
            fuel = `${amount}%`;
        };
    };
}
// TS 5.0
// function changeDoorStatus(status: boolean) {
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     return class extends target {
//       open = status;
//     };
//   };
// }
// function changeAmountOfFuel(amount: number) {
//   return <T extends { new (...args: any[]): {} }>(
//     target: T,
//     context: ClassDecoratorContext<T>
//   ) => {
//     return class extends target {
//       fuel = `${amount}%`;
//     };
//   };
// }
function closeCar(constructor) {
    return class extends constructor {
        open = false;
    };
}
const newCar = new myCar();
console.log(newCar.isOpen());
