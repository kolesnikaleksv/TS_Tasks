// Create a Generic interface PlayerData that would be suitable for creating such objects:
type Hours = string | number | { total: number; inMenu: number };
interface PlayerData<T extends string | number, U extends Hours> {
  game: T;
  hours: U;
  server: string;
}

const player1: PlayerData<string, number> = {
  game: 'CS:GO',
  hours: 300,
  server: 'basic',
};

const player2: PlayerData<number, string> = {
  game: 2048,
  hours: '300 h.',
  server: 'arcade',
};

const player3: PlayerData<string, { total: number; inMenu: number }> = {
  game: 'Chess',
  hours: {
    total: 500,
    inMenu: 50,
  },
  server: 'chess',
};

// The array of data with figures contains objects, each of which must have a 'name' property
// Each object may also contain additional properties in random form
// The 'name' property can have only 4 variants
// The calculateAmountOfFigures function must accept an array of objects that must have a 'name' property
// It returns an object-instance of AmountOfFigures
// Inside itself, it counts how many of each type of figure were in the array and writes the results in AmountOfFigures
// With the current data, the console should output:
// { squares: 3, circles: 2, triangles: 2, others: 1 }

interface AmountOfFigures {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

type Name = 'rect' | 'triangle' | 'circle' | 'line' | 'triangle' | 'square';
type ISides =
  | { a: number }
  | { a: number; b: number }
  | { a: number; b: number; c: number }
  | { l: number }
  | { r: number };

interface IObj<ISides> {
  name: Name;
  data?: ISides;
}

function calculateAmountOfFigures(figure: IObj<ISides>[]): AmountOfFigures {
  const amountOfFigures: AmountOfFigures = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };
  figure.forEach((figure) => {
    switch (figure.name) {
      case 'rect':
        amountOfFigures.squares++;
        break;
      case 'circle':
        amountOfFigures.circles++;
        break;
      case 'triangle':
        amountOfFigures.triangles++;
        break;
      default:
        amountOfFigures.others++;
        break;
    }
  });
  return amountOfFigures;
}

const data: IObj<ISides>[] = [
  {
    name: 'rect',
    data: { a: 5, b: 10 },
  },
  {
    name: 'rect',
    data: { a: 6, b: 11 },
  },
  {
    name: 'triangle',
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: 'line',
    data: { l: 15 },
  },
  {
    name: 'circle',
    data: { r: 10 },
  },
  {
    name: 'circle',
    data: { r: 5 },
  },
  {
    name: 'rect',
    data: { a: 15, b: 7 },
  },
  {
    name: 'triangle',
  },
];

console.log(calculateAmountOfFigures(data));

// Second solution - 2

interface AmountOfFigures2 {
  squares: number;
  circles: number;
  triangles: number;
  others: number;
}

type Name2 = 'rect' | 'triangle' | 'circle' | 'line' | 'square';

interface IOneObject {
  name: Name2;
  data?: unknown;
}

function calculateAmountOfFigures2(figure: IOneObject[]): AmountOfFigures2 {
  const amountOfFigures: AmountOfFigures2 = {
    squares: 0,
    circles: 0,
    triangles: 0,
    others: 0,
  };
  figure.forEach((figure) => {
    switch (figure.name) {
      case 'rect':
        amountOfFigures.squares++;
        break;
      case 'circle':
        amountOfFigures.circles++;
        break;
      case 'triangle':
        amountOfFigures.triangles++;
        break;
      default:
        amountOfFigures.others++;
        break;
    }
  });
  return amountOfFigures;
}

const data2: IOneObject[] = [
  {
    name: 'rect',
    data: { a: 5, b: 10 },
  },
  {
    name: 'rect',
    data: { a: 6, b: 11 },
  },
  {
    name: 'triangle',
    data: { a: 5, b: 10, c: 14 },
  },
  {
    name: 'line',
    data: { l: 15 },
  },
  {
    name: 'circle',
    data: { r: 10 },
  },
  {
    name: 'circle',
    data: { r: 5 },
  },
  {
    name: 'rect',
    data: { a: 15, b: 7 },
  },
  {
    name: 'triangle',
  },
];

console.log(calculateAmountOfFigures2(data2));
