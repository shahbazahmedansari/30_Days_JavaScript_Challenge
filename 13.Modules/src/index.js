// Activity-1: Creating and Exporting Modules:

// Task-1: Create a module that exports a function to add two numbers. Import and use this module in another script.

import { addTwoNumbers } from "./activity1.js";

const result = addTwoNumbers(4, 5);

console.log(result);

// Task-2: Create a module that exports an object representing a person with properties and methods. Import and use this module in another script.

import { personObject } from "./activity1.js";

console.log(
  personObject.name,
  personObject.age,
  personObject.city,
  personObject.country,
  personObject.message()
);

// Activity-2: Named and Default Exports:

// Task-3: Create a module that exports multiple functions using named exports. Import and use these functions in another script.

import {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
} from "./task3.js";

console.log(addNumbers(10, 20));
console.log(subtractNumbers(20, 40));
console.log(multiplyNumbers(6, 6));
console.log(divideNumbers(50, 100));

// Task-4: Create a module that exports a single function using default export. Import and use this fucntion in another script.

import calculatesimpleAndCompoundInterest from "./task4.js";

console.log(calculatesimpleAndCompoundInterest(1000, 5, 2));

// Activity-3: Importing Entire Modules:

// Task-5: Create a module that exports multiple constants and fucntions. Import the entire module as an object in another script and use its properties.

import { PI, calculateCircleArea } from "./activity3.js";

console.log(PI, calculateCircleArea(50));

// Activity-4: Using Third-Party Modules:

// Task-6: Install a third party module (e.g., "lodash") using npm. Import and use a function from this module in a script.

import _ from "lodash";
import axios from "axios";

function removeDuplicateNumbers(arr) {
  return _.uniq(arr);
}

const uniqueNumbers = removeDuplicateNumbers([
  1, 2, 3, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7,
]);

console.log(uniqueNumbers);

// Task-7: Install a third-party module (e.g., "axios") using npm. Import and use this module to make a network request in a script.

async function getUsers() {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log("Response data: ", response);
  } catch (error) {
    console.log("Error: ", error);
  }
}
getUsers();

// Activity-5: Module Bundling (optional):

// Task-8: Use a module bundler like Webpack or Parcel to bundle multiple Javascript files into a single file. Write a script to demonstrate the bundling process.

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(["Hello", "webpack"], " ");

  return element;
}

document.body.appendChild(component());
