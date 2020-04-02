const carMakers = ['ford', 'toyota', 'chevy'];
const carDealers: string[] = []; // To avoid type: any!

const carsByMake = [['f150'], ['rav4'], ['fiesta']]; // => : string[][]

// Help with inference when extracting values
const car = carMakers[0];
const myCar = carMakers.pop();

// Prevent incompatible values
//carMakers.push(100);

// Help with Map, forEach, etc
carMakers.map((car: string): string => {
  return car.toLowerCase();
});

// Flexible types
const importantDates: (string | Date)[] = [new Date()]; // , + '2020-04-30'
importantDates.push('2020-04-30');
// importantDates.push(30);
