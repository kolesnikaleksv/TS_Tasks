// Data structure for a clothing warehouse
type Availability = 'empty' | number;

interface ClothesWarehouse {
  jackets: Availability;
  hats: Availability;
  socks: Availability;
  pants: Availability;
}

// Data structure for a stationery warehouse
interface StationeryWarehouse {
  scissors: Availability;
  paper: 'empty' | boolean;
}

// Data structure for an appliances warehouse
interface AppliancesWarehouse {
  dishwashers: Availability;
  cookers: Availability;
  mixers: Availability;
}

// General data structure, inherits all data from the three above
// + adds its own properties
interface TotalWarehouse
  extends AppliancesWarehouse,
    StationeryWarehouse,
    ClothesWarehouse {
  deficit: boolean;
  date: Date;
}

// Main object containing all data, must conform to the TotalWarehouse format
const totalData: TotalWarehouse = {
  jackets: 5,
  hats: 'empty',
  socks: 'empty',
  pants: 15,
  scissors: 15,
  paper: true,
  dishwashers: 3,
  cookers: 'empty',
  mixers: 14,
  deficit: true,
  date: new Date(),
};

// Implement a function that takes in the main object totalData in the required format
// and always returns a string.
// The function should filter the object's data and keep only the names of the items
// that have the value "empty" and place them in this string.
// If there are no such items, it should return a different string (see below).

// With the given totalData object, the output string should be:
// "We need these items: hats, socks, cookers"
// Items should be separated by commas, without a comma at the end.
// There should be a space after the colon, but no space at the end of the string.

function printReport(data: TotalWarehouse): string {
  const value = Object.entries(data)
    .filter((item) => item[1] === 'empty')
    .map((item) => item[0])
    .join(', ');

  if (value.length > 0) {
    return `We need these items: ${value}.`;
  } else {
    return 'Everything is fine';
  }
}

console.log(printReport(totalData));
