// Activity-1: Function Declaration

// Task-1: Write a function to check if a number is even or odd and log the result to the console.

function evenOrOdd(num) {
  num % 2 === 0
    ? console.log(`${num} is even.`)
    : console.log(`${num} is odd.`);
}
evenOrOdd(5);
evenOrOdd(10);

// Task-2: Write a function to calculate the square of a number and return the result.

function calculateSquare(num) {
  return num * num;
}
console.log(calculateSquare(4));

// Activity-2: Function Expression:

// Task-3: Write a function expression to find the maximum of two numbers and log the result.

const maximumNumber = function (a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
};
console.log(maximumNumber(5, 7));
console.log(maximumNumber(10, 7));

// Task-4: Write a function expression to concatenate two strings and return the result.

const concatenateStrings = function (str1, str2) {
  return str1 + str2;
};
console.log(concatenateStrings("You are", " very good."));

// Activity-3: Arrow Functions:

// Task-5: Write an arrow function to calculate the sum of two numbers and return the result.

const sumOfTwoNumbers = (num1, num2) => num1 + num2;
console.log(sumOfTwoNumbers(9, 7));
console.log(sumOfTwoNumbers(10, 20));

// Task-6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const checkString = (str, char) => {
  if (str.includes(char)) {
    return true;
  } else {
    return false;
  }
};
console.log(checkString("Are you ready?", "P"));
console.log(checkString("Are you ready?", "?"));

// Activity-4: Function Parameters and Default Values:

// Task-7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.

const subtractTwoNumbers = (num1, num2 = 0) => {
  if (num1 > num2) return num1 - num2;

  return num2 - num1;
};
console.log(subtractTwoNumbers(45));
console.log(subtractTwoNumbers(52, 27));
console.log(subtractTwoNumbers(15, 27));

// Task-8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

const greetingMessage = (name, age = 18) => {
  return `Hello ${name}, your age is ${age}`;
};
console.log(greetingMessage("John", 20));
console.log(greetingMessage("Lily"));

// Activity-5: Higher Order Functions:

// Task-9: Write a higher order function that takes a function and a number, and calls the function that many times.

const hoFunction = (fn, num) => {
  for (let i = 0; i <= num; i++) {
    fn();
  }
};

hoFunction(() => {
  console.log("Hi there!");
}, 5);

// Task-10: Write a higher order function that takes two functions and a value, applies the first function to the value, and then applies second function to the result.

const calculateSquareOfNumber = (num) => {
  return num * num;
};

const calculatePower = (num, pow) => {
  return Math.pow(num, pow);
};

const higherOrderFunction = (
  calculateSquareOfNumber,
  calculatePower,
  number
) => {
  const result = calculateSquareOfNumber(number);
  console.log(`Power of ${result} is ${calculatePower(result, 2)}`);
};

higherOrderFunction(calculateSquareOfNumber, calculatePower, 5);
