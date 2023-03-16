const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

// this just creates an array, which can be messed up pretty easily
// const pepsi = ['brown', true, 40];
// pepsi[0] = 40;
// pepsi[2] = 'brown';

// this is how it can be turned into a tuple
const pepsi: [string, boolean, number] = ['brown', true, 40];

// the structure can also be specified as a type alias
type Drink = [string, boolean, number];

const coke: Drink = ['brown', true, 40];


const carSpecs: [number, number] = [400, 3354];
// the tuple above doesn't tell us anything about the values inside of it. the
// object below is a better way to hande this because the properties are named
const carStats = {
    horsepower: 400,
    weight: 3354
};