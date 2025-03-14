interface IPhone {
  company: string;
  number: number;
}

// IMobilePhone should inherit from IPhone,
// the type of the property companyPartner depends on the company property

interface IMobilePhone extends IPhone {
  size: string;
  companyPartner: IPhone['company'];
  manufactured: Date;
}

// Type the phones object

const phones: IMobilePhone[] = [
  {
    company: 'Nokia',
    number: 1285637,
    size: '5.5',
    companyPartner: 'MobileNokia',
    manufactured: new Date('2022-09-01'),
  },
  {
    company: 'Samsung',
    number: 4356637,
    size: '5.0',
    companyPartner: 'SamMobile',
    manufactured: new Date('2021-11-05'),
  },
  {
    company: 'Apple',
    number: 4552833,
    size: '5.7',
    companyPartner: 'no data',
    manufactured: new Date('2022-05-24T12:00:00'),
  },
];

interface IPhonesManufacturedAfterDate extends IMobilePhone {
  initialDate: string;
}

// The function should filter the data array and return a new array
// with phones that were manufactured after the date in the third argument

function filterPhonesByDate<T extends keyof IMobilePhone>(
  phones: IMobilePhone[],
  key: T,
  initial: string
): IPhonesManufacturedAfterDate[] {
  const arrPhones: IPhonesManufacturedAfterDate[] = [];

  phones.forEach((phone) => {
    if (phone[key] > new Date(initial)) {
      arrPhones.push({
        ...phone,
        initialDate: JSON.stringify(phone.manufactured).slice(0, 11),
      });
    }
  });

  return arrPhones;
}

// The second argument when calling the function should be linked to the first,
// meaning we will get suggestions for the properties of this object

console.log(filterPhonesByDate(phones, 'manufactured', '2022-01-01'));
