// interface Vehicle {
//     name: string;
//     year: number;
//     broken: boolean;
// }
// an interface is sort of like a class for types
// interface Vehicle {
//     name: string;
//     year: Date;
//     broken: boolean;
//     summary(): string;
// }

interface Reportable {
    summary(): string;
}


// const oldCivic = {
//     name: 'civic',
//     year: 2000,
//     broken: true,
// };

const oldCivic = {
    name: 'civic',
    year: new Date(),
    broken: true,
    summary(): string {
        return `Name: ${this.name}`;
    }
};

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40,
    summary(): string {
        return `My drink has ${this.sugar} grams of sugar`;
    }
};

// const printVehicle = (vehicle: {
//     name: string;
//     year: number;
//     broken: boolean;
// }): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// };
// // this is a pretty massive and messy looking way to set this up, but can be
// // cleaned up by making an interface
// printVehicle(oldCivic);

// const printVehicle = (vehicle: Vehicle): void => {
//     console.log(`Name: ${vehicle.name}`);
//     console.log(`Year: ${vehicle.year}`);
//     console.log(`Broken: ${vehicle.broken}`);
// };

// printVehicle(oldCivic);


const printSummary = (item: Reportable): void => {
    console.log(item.summary);
};

printSummary(oldCivic);
printSummary(drink);