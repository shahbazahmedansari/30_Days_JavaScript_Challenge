// Activity-1: Template Literals:

// Task-1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.

const personDetails = (name, age) => {
  return `The person's name is ${name} and their age is ${age}`;
};

console.log(personDetails("Tyson", 34));

// Task-2: Create a multi-line string using template literals and log to the console.

const paragraph = () => {
  return `Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, 
  remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset 
  sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like 
  Aldus PageMaker including versions of Lorem Ipsum.`;
};

console.log(paragraph());

// Activity-2: Destructuring:

// Task-3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console.

const numArr = [45, 60, 18, 26, 95, 39];

const [x, y] = numArr;

console.log(x, y);

// Task-4: Use object destructuring to extract the title and author from a book object and log to the console.

const book = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2002,
};

const { title, author } = book;

console.log(title, author);

// Activity-3: Spread and Rest Operators:

// Task-5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console.

const oldArr = [
  { id: 1, name: "Daichi", age: 24 },
  { id: 2, name: "Max", age: 25 },
  { id: 3, name: "Ray", age: 27 },
];

const newArr = [
  ...oldArr,
  { id: 4, name: "Kai", age: 28 },
  { id: 5, name: "Tyson", age: 26 },
];

console.log(oldArr);
console.log(newArr);

// Task-6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.

function sum(...args) {
  let total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

console.log(sum(1, 2, 4));

// Activity-4: Default Parameters:

// Task-7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function multiply(a, b = 1) {
  return a * b;
}

console.log(multiply(4, 5));
console.log(multiply(5));

// Activity-5: Enhanced Object Literals:

// Task-8: Use enhanced object literals to create an object with methods and properties, and log the object to the console.

function getLaptop(make, model, year) {
  return {
    make,
    model,
    year,
  };
}

console.log(getLaptop("Apple", "MacBook", "2015"));

// Task-9: Create and object with computed property names based on variables and log the object to the console.

const phoneBrand = "brand";
const phoneName = "name";
const launchYear = "year";

const phone = {
  [phoneBrand]: "Samsung",
  [phoneName]: "Samsung Fold 1",
  [launchYear]: 2019,
};

console.log(phone);
