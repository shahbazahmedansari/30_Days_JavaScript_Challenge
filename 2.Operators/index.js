// Activity-1: Arithmetic Operations

// Task-1: Write a program to add two numbers and log the result to the console.

function add(a, b) {
  console.log(a + b);
}
add(4, 5);

// Task-2: Write a program to subtract two numbers and log the result to the console.

function subtract(a, b) {
  if (a > b) {
    console.log(a - b);
  } else {
    console.log(b - a);
  }
}
subtract(4, 5);
subtract(6, 4);

// Task-3: Write a program to multiply two numbers and log the result to the console.

function multiply(a, b) {
  console.log(a * b);
}
multiply(6, 7);

// Task-4: Write a program to divide two numbers and log the result to the console.

function divide(a, b) {
  if (a > b) {
    console.log(a / b);
  } else {
    console.log(b / a);
  }
}
divide(5, 7);
divide(10, 2);

// Task-5: Write a program to find the remainder when one number is divided by another and log the result to the console.

function findRemainder(a, b) {
  let res = 0;
  if (a > b) {
    res = a % b;
  } else {
    res = b % a;
  }
  console.log(res);
}
findRemainder(5, 7);
findRemainder(10, 2);

// Activity-2: Assignment Operators

// Task-6: Use the "+=" operator to add a number to a variable and log the result to the console.

function increment(num, res = 0) {
  res += num;
  console.log(res);
}
increment(5, 7);

// Task-7: Use the "-=" operator to subtract a number from a variable and log the variable to the console.

function decrement(num1, num2) {
  if (num1 > num2) {
    num1 -= num2;
    console.log(num1);
  } else {
    num2 -= num1;
    console.log(num2);
  }
}
decrement(5, 7);
decrement(7, 5);

// Activity-3: Comparison Operators

// Task-8: Write a program to compare two numbers using ">" and "<" and log the result to the console.

function comparison1(num1, num2) {
  let res = 0;
  if (num1 > num2) {
    res = num1 - num2;
  } else {
    res = num2 - num1;
  }
  console.log(res);
}
comparison1(10, 15);
comparison1(20, 10);

// Task-9: Write a program to compare two numbers using ">=" and "<=" and log the result to the console.

function comparison2(num1, num2) {
  let res = 0;
  if (num1 >= num2) {
    res = num1 / num2;
  } else {
    res = num2 / num1;
  }
  console.log(res);
}
comparison2(10, 2);
comparison2(2, 5);

// Task-10: Write a program to compare two numbers using "==" and "===" and log the result to the console.

function comparison3(num1, num2) {
  if (num1 == num2) {
    console.log("Loose equality comparison", num1, num2);
  } else {
    console.log("Not equal");
  }

  if (num1 === num2) {
    console.log("Equality with types comparison", num1, num2);
  } else {
    console.log("Not equal");
  }
}
comparison3(5, "5");
comparison3(7, 7);
comparison3(2, 3);

// Activity-4: Logical Operators

// Task-11: Write a program that uses the "&&" operator to combine two conditions and log the result to the console.

function logicalComparison1(age) {
  if (age >= 18 && age < 30) {
    console.log("You are eligible to drive");
  } else if (age < 18) {
    console.log("You are not eligible to drive");
  }
}
logicalComparison1(18);

// Task-12: Write a program that uses "||" operator to combine two conditions and log the result to the console.

function logicalComparison2(age) {
  if (age > 18 || age === 18) {
    console.log("You are eligible to drive");
  } else {
    console.log("You are not eligible to drive");
  }
}
logicalComparison2(20);

// Task-13: Write a program that uses "!" operator to negate a condition and log the result to the console.

function logicalComparison3(age) {
  if (!(age === 18 || age > 18)) {
    console.log("You are not eligible to drive");
  } else {
    console.log("You are eligible to drive");
  }
}

logicalComparison3(17);

// Activity-5: Ternary Operator

// Task-14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.

function ternaryCheck(num) {
  Math.sign(num) === -1
    ? console.log("negative number")
    : console.log("positive number");
}
ternaryCheck(-3);
ternaryCheck(80);

// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and log the result.

function arithmeticOperations(a, b) {
  console.log(a + b);
  console.log(a * b);
  a > b ? console.log(a - b) : console.log(b - a);
  a > b ? console.log(a / b) : console.log(b / a);
  let remainder = 0;
  a > b ? (remainder = a % b) : (remainder = b % a);
  console.log(remainder);
}

arithmeticOperations(5, 7);

// 2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.

function logicalAndComparisonOperators(a, b) {
  if (a > b) {
    console.log(a);
  } else if (a < b) {
    console.log(b);
  } else if (a == b || a === b) {
    console.log(a, b);
  }
}
logicalAndComparisonOperators(5, 7);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.

function ternaryOperatorScript(num) {
  Math.sign(num) === -1
    ? console.log("negative number")
    : console.log("positive number");
}
ternaryOperatorScript(-10);
ternaryOperatorScript(10);
