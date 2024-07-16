// Activity-1: For Loop:

// Task-1 Write a program to print numbers from 1 to 10 using for loop.

function printNumbers() {
  for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
}
printNumbers();

// Task-2: Write a program to print the multiplication table of 5 using for loop.

function tableOfFive() {
  let res = 0;
  const num = 5;
  for (let i = 1; i <= 10; i++) {
    res = num * i;
    console.log(res);
  }
}
tableOfFive();

// Activity-2: While Loop

// Task-3: Write a program to calculate the sum of numbers from 1 to 10 using while loop.

function sumOfFirstTenNumbers() {
  let i = 1;
  let res = 0;
  while (i <= 10) {
    res = res + i;
    i++;
  }
  console.log(res);
}
sumOfFirstTenNumbers();

// Taask-4: Write a program to print the numbers from 10 to 1 using while loop.

function printReverseNumbers() {
  let i = 10;
  while (i >= 1) {
    console.log(i);
    i--;
  }
}
printReverseNumbers();

// Activity-3: Do... While Loop:

// Task-5: Write a program to print numbers from 1 to 5 using a do... while loop.

function printOntToFive() {
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 5);
}
printOntToFive();

// Task-6: Write a program to calculate the factorial of a number using a do... while loop.

function factorialNumber(num) {
  let res = 1;
  let i = num;
  do {
    res = res * i;
    i--;
  } while (i >= 1);
  console.log(res);
}
factorialNumber(6);

// Activity-4: Nested Loops

// Task-7: Write a program to print a pattern using nested for loops:
/*
//  *
//  **
//  ***
//  ****
//  *****
 */

function patternCreator() {
  let pattern = "";
  let rows = 5;

  for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
      pattern += "*";
    }

    pattern += "\n";
  }
  console.log(pattern);
}
patternCreator();

// Activity-5: Loop Control Statements:

// Task-8: Write a program to print numbers from 1 to 10, but skip the number 5 using "continue" statement.

function loopControl1() {
  for (let i = 1; i <= 10; i++) {
    if (i === 5) {
      continue;
    } else {
      console.log(i);
    }
  }
}
loopControl1();

// Task-9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the "break" statement.

function loopControl2() {
  for (let i = 1; i <= 10; i++) {
    if (i === 7) {
      break;
    } else {
      console.log(i);
    }
  }
}
loopControl2();
