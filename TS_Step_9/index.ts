// It is necessary to type this large object
// The property `futureClasses` should depend on the type of `classes`
// The properties `exClients` and `futureClients` should also depend on `currClients`
// OR all three should depend on a common parent

// In simple terms: when adding a property to the target object,
// it should be automatically added to the dependent ones
// (immediate suggestion from TypeScript).

const fitnessClubCenter: IFitnesClub = {
  clubName: 'Fitness club Center',
  location: 'central ave. 45, 5th floor',
  classes: [
    {
      name: 'yoga',
      startsAt: '8:00 AM',
      duration: 60,
    },
    {
      name: 'trx',
      startsAt: '11:00 AM',
      duration: 45,
    },
    {
      name: 'swimming',
      startsAt: '3:00 PM',
      duration: 70,
    },
  ],
  futureClasses: [
    {
      name: 'boxing',
      willStartsAt: '6:00 PM',
      duration: 40,
    },
    {
      name: 'breath training',
      willStartsAt: '8:00 PM',
      duration: 30,
    },
  ],
  currClients: [
    {
      name: 'John Smith',
      age: '-',
      gender: 'male',
      timeLeft: '1 month',
    },
    {
      name: 'Alise Smith',
      age: 35,
      gender: 'female',
      timeLeft: '3 month',
    },
    {
      name: 'Ann Sonne',
      age: 24,
      gender: 'female',
      timeLeft: '5 month',
    },
  ],
  exClients: [
    {
      name: 'Tom Smooth',
      age: 50,
      gender: 'male',
      makeCallFor: new Date('2023-08-12'),
    },
  ],
  futureClients: [
    {
      name: 'Maria',
      makeCallFor: new Date('2023-07-10'),
    },
  ],
};

interface IFitnesClub {
  clubName: string;
  location: string;
  classes: IClasses[];
  futureClasses: IFutureClasses[];
  currClients: ICurrClients[];
  exClients: IExClients[];
  futureClients: IFutureClients[];
}

interface ICurrClients {
  name: string;
  age: string | number;
  gender: string;
  timeLeft: string;
}

interface IClasses {
  name: string;
  startsAt: string;
  duration: number;
}

type IClassesWithoutWillStartAt = Omit<IClasses, 'startsAt'>;
interface IFutureClasses extends IClassesWithoutWillStartAt {
  willStartsAt: string;
}
type ICurrClientsWithoutTimeLeft = Omit<ICurrClients, 'timeLeft'>;
interface IExClients extends ICurrClientsWithoutTimeLeft {
  makeCallFor: Date;
}
type ICurrClientsWithOnlyName = Pick<ICurrClients, 'name'>;
type IExClientsPickOnlyMakeCallFor = Pick<IExClients, 'makeCallFor'>;
interface IFutureClients
  extends ICurrClientsWithOnlyName,
    IExClientsPickOnlyMakeCallFor {}
