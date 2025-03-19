interface ICar {
  fuel: string;
  freeSeats: number;
  open: boolean;
}

@changeDoorStatus(false)
@changeAmountOfFuel(670)
class myCar implements ICar {
  fuel: string = '100%';
  freeSeats: number = 3;
  open: boolean = true;

  isOpen(this: myCar): string {
    console.log(this.fuel);
    return this.open ? 'Open' : 'closed';
  }
}

function changeDoorStatus(status: boolean) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      open = status;
    };
  };
}

function changeAmountOfFuel(amount: number) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
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

function closeCar<T extends { new (...args: any[]): {} }>(constructor: T) {
  return class extends constructor {
    open = false;
  };
}

const newCar = new myCar();
console.log(newCar.isOpen());
