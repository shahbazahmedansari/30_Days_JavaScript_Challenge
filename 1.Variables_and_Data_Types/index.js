// Activity-1: Variable Declaration

// Task-1: Declare a variable using "var", assign it a number, and log the value to the console.

var myNumber = 7;
console.log(myNumber);

// Task-2: Declare a variable using "let", assign it a string, and log the value to the console.

let myString = "Hi there!";
console.log(myString);

// Activity-2: Constant Declaration

// Task-3: Declare a variable using "const", assign it a boolean, and log the value to the console.

const myBoolean = true;
console.log(myBoolean);

// Activity-3: Data Types

// Task-4: Create variables of different data types (number, string, boolean, object, array) and log each variable's type using the "typeof" operator;

const cityName = "Mumbai";
const cityPincode = 400085;
const isLivingInCity = true;
const personInCity = {
  name: "Alex",
  age: 42,
  collegeLocation: "Chandigarh",
};

const moneyInBankOfPerson = [45, 50, 5000, 205, 507];

console.log(typeof cityName);
console.log(typeof cityPincode);
console.log(typeof isLivingInCity);
console.log(typeof personInCity);
console.log(typeof moneyInBankOfPerson);

// Activity-4: Reassigning Variables

// Task-5: Declare a variable using "let", assign it an initial value, reassign a value, and log both the values to the console.

let initialValue = "Chai aur Code";
console.log(initialValue);

initialValue = 52;
console.log(initialValue);

// Activity-5: Understanding "const"

// Task-6: Try reassigning a variable declared with "const" and observe the error.

const newValue = "All developers are nerd";
console.log(newValue);

try {
  newValue = "All nerds are developers";
} catch (error) {
  console.log(error);
}

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console.

let newNumber = 889;
let newString = "You can't see me";
let newBoolean = false;
let newUndefined;
let newNull = null;
let newObject = {
  firstname: "Naruto",
  lastName: "Uzumaki",
  address: "Leaf Village",
};
let newArray = [209, 657, 821, 592, 25];

console.log(newNumber, typeof newNumber);
console.log(newString, typeof newString);
console.log(newBoolean, typeof newBoolean);
console.log(newUndefined, typeof newUndefined);
console.log(newNull, typeof newNull);
console.log(newObject, typeof newObject);
console.log(newArray, typeof newArray);

// 2. Reassignment Demo: Create a script that demonstrates the difference in behaviour between "let" and "const" when it comes to reassignment.

let greetings = "Let's start the show";
console.log(greetings);

try {
  greetings = "Are you ready";
  console.log(greetings);
} catch (error) {
  console.log(error);
}

const anotherGreetings = "Chaliye shuru karte hain";
console.log(anotherGreetings);

try {
  anotherGreetings = "Chaliye band karte hain";
  console.log(anotherGreetings);
} catch (error) {
  console.log(error);
}
