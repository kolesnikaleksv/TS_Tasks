// Request
// {
//     animal: 'cat' | 'dog' | 'bird',
//     breed: string,
//     sterilized?: string
// }
type Species = 'cat' | 'dog' | 'bird';

interface ReqAnimal {
  animal: Species;
  breed: string;
  sterilized?: string;
}
// Response #1
type Status = 'available' | 'not available';

interface AvailableData extends ReqAnimal {
  location: string;
  age?: number;
}
interface NotAvailableData {
  message: string;
  nextUpdateIn: Date;
}
interface AvailableAnimal {
  status: Status;
  data: AvailableData;
}

interface NotAvailableAnimal {
  status: Status;
  data: NotAvailableData;
}

// {
//     status: 'available',
//     data: {
//         animal: 'cat' | 'dog' | 'bird',
//         breed: string,
//         sterilized?: string,
//         location: string,
//         age?: number
//     }
// }

// Response #2

// {
//     status: 'not available',
//     data: {
//         message: string,
//         nextUpdateIn: Date
//     }
// }
const availableAnimal: AvailableAnimal = {
  status: 'available',
  data: {
    animal: 'cat',
    breed: 'string',
    sterilized: 'string',
    location: 'string',
    age: 3,
  },
};

const notAvailableAnimal: NotAvailableAnimal = {
  status: 'not available',
  data: {
    message: 'hhello',
    nextUpdateIn: new Date(),
  },
};

function isAvailable(
  animal: NotAvailableAnimal | AvailableAnimal
): animal is AvailableAnimal {
  return animal.status === 'available';
}

function checkAnimalData(
  animal: AvailableAnimal | NotAvailableAnimal
): AvailableData | string {
  if (isAvailable(animal)) {
    // Replace the condition!
    return animal.data;
  } else {
    // return `${JSON.stringify(
    //   animal.data
    // )}, you can try in ${animal.data.nextUpdateIn.toLocaleDateString()}`;
    return `${
      animal.data.message
    }, you cna try in ${animal.data.nextUpdateIn.toLocaleDateString()}`;
  }
}

console.log(checkAnimalData(availableAnimal));
console.log(checkAnimalData(notAvailableAnimal));
