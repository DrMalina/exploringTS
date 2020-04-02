interface Vehicle {
  name: string;
  year: number;
  broken: boolean;
  summary(): string;
}

interface Reportable {
  summary(): string;
}

const oldCivic = {
  name: 'Civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Car is ${2020 - this.year}`;
  }
};

const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 45,
  summary(): string {
    return `My drink has ${this.sugar} grams of sugar`;
  }
};

// Without interface
const printVehicle = (vehicle: {
  name: string;
  year: number;
  broken: boolean;
}): void => {
  console.log(`Name: ${vehicle.name}. Broken? ${vehicle.broken}`);
};

// With Interface
const printVehicle2 = (vehicle: Vehicle): void => {
  console.log(vehicle.summary());
};

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

printSummary(oldCivic);
printSummary(drink);
