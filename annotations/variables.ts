let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built-in objects
let now: Date = new Date();

// arrays
let colors: string[] = ['red', 'green', 'blue'];
let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, false, false];

// classes
class Car {}
let car: Car = new Car();

// object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 125
};

// function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

// When to use annotations
// 1) Function that return 'any' type
const json = '{"x":10,"y":20}';
const coords: { x: number; y: number } = JSON.parse(json);
console.log(coords);
// 2) When we declare a var on one line and init it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
// 3) Var whose type cannot be inferred correctly
let numbs = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbs.length; i++) {
  if (numbs[i] > 0) {
    numberAboveZero = numbs[i];
  }
}
