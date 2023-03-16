let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;


// built in objects 
let now: Date = new Date();

// indicating an array of string types
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: {x: number; y: number} = {
    x: 10,
    y: 20
};

// Function
const logNumber: (i:number) => void = (i:number) => {
    console.log(i);
};



// // When to use annotations
// // 1) Function that returns the 'any' type
// const json = '{"x": 10, "y": 20}';
// const coordinates = JSON.parse(json); // this now has a type of "any"
// console.log(coordinates); // ==> {x: 10, y: 20};
// // when parsing, typescript cannot know what the value type will be
// // because of this, it will infer a type of "any"
// coordinates.blahblahblah();
// // even though blahblahblah doesn't exist, it still doesn't throw any red flags
// // this is because of the "any" type. typescript can't do its job when this is the case

// const correctCoordinates: {x:number, y: number} = JSON.parse(json);
// console.log(correctCoordinates);
// correctCoordinates.blahblahblah();
// // now that the types have been annotated, it can see the error


// // 2) When we declare a variable on one line and initialize it later
// let words = ['red', 'green', 'blue'];
// let foundWord;
// // because the variable was declared but not defined, typscript cannot
// // infer the type, so it cannot do its job
// for (let i = 0; i < words.length(); i++) {
//     if (words[i] === 'green') {
//         foundWord = true;
//     }
//     console.log(foundWord)
// };
// // setting the type when declaring the variable is the way to handle this
// let correctFoundWord: boolean;
// for (let i = 0; i < words.length(); i++) {
//     if (words[i] === 'green') {
//         foundWord = true;
//     }
//     console.log(foundWord)
// };
// // more realistically, we probably would have just set this variable to false
// let definedFoundWord = false;
// for (let i = 0; i < words.length(); i++) {
//     if (words[i] === 'green') {
//         foundWord = true;
//     }
//     console.log(foundWord)
// };



// // 3) When we want a variable to have a type that cannot be inferred
// let numbers = [-10, -1, 12];
// // multiple types can be specified using the OR symbol (|)
// let numberAboveZero: boolean | number = false;

// for (let i = 0; i < numbers.length(); i++) {
//     if (numbers[i] > 0) {
//         numberAboveZero = numbers[i]
//     }
// };














