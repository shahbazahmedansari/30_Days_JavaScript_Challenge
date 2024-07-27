// Activity-1: Understanding Closures:

// Task-1: Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function addNumbers(a, b) {
  let res = 0;
  res = a + b;
  console.log(res);
  function subtractNumbers(c, d) {
    c > d ? (res = c - d) : (res = d - c);
    console.log(res);
  }
  subtractNumbers(a, b);

  console.log(res);
}

addNumbers(4, 5);

// Task-2: Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function createCounter() {
  let counter = 0; // Private variable

  return {
    increment: function () {
      counter += 1;
    },

    getValue: function () {
      return counter;
    },
  };
}
const myCounter = createCounter();
myCounter.increment();
console.log(myCounter.getValue());
myCounter.increment();
console.log(myCounter.getValue());

// Activity-2: Practical Closures:

// Task-3: Write a function that generates unique ID's. Use a closure to keep track of the last generated ID and increment it with each call.

function generateNewID() {
  let generatedId = 0;
  generatedId = Math.floor(Math.random() * 10 + 1);

  function incrementGeneratedId() {
    console.log(generatedId);
    generatedId++;
    return generatedId;
  }
  incrementGeneratedId();
  console.log(generatedId);
}
generateNewID();

// Task-4: Create a closure that captures a user's name and returns a function that greets the user by name.

function newPerson(str) {
  let username = str;
  console.log(username);

  function greetingPerson() {
    return `Hi there ${username}! How was your day today?`;
  }

  console.log(greetingPerson());
}
newPerson("John Doe");

// Activity-3: Closures in Loops:

// Task-5: Write a loop that creates an array of functions. Each function should log its index when called. Use a closure to ensure each function logs the correct index.

function loopClosure() {
  const functions = [];
  for (let i = 0; i < 10; i++) {
    functions[i] = (function (index) {
      return function () {
        console.log(index);
      };
    })(i);
  }
  functions[0]();
  functions[1]();
  functions[2]();
}
loopClosure();

// Activity-4: Module Pattern:

// Task-6: Use closures to create a simple module for managing a collection of items. Implement methods to add, remove, and list items.

function modulePattern() {
  let items = [];

  function addItem(item) {
    items.push(item);
  }

  function removeItem(item) {
    const index = items.indexOf(item);
    if (index > -1) {
      items.splice(index, 1);
    }
  }

  function listItem() {
    return items.slice();
  }

  addItem("Apple");
  console.log(items);

  addItem("Banana");
  console.log(items);

  listItem();
  console.log(items);

  removeItem("Apple");
  console.log(items);
}

modulePattern();

// Activity-5: Memoization:

// Task-7: Write a function that memoizes the results of another function. Use a closure to store the results of previous computations.

function simpleInterestMemoize(fn) {
  const cache = {}; // Object to store results of previous computations
  return function (x, y, z) {
    // Checking if the result is already in the cache
    if (cache[(x, y, z)] !== undefined) {
      console.log("Returning from cache...");
      return cache[(x, y, z)];
    }
    // Calculating the result if not in cache
    console.log("Calculating result...");
    const res = fn(x, y, z);
    cache[(x, y, z)] = res; // Store the result in cache
    return res;
  };
}

function calculateSimpleInterest(principal, rate, time) {
  const simpleInterest = (principal * rate * time) / 100;
  return simpleInterest;
}

const memoizedSimpleInterest = simpleInterestMemoize(calculateSimpleInterest);
console.log(memoizedSimpleInterest(1000, 5, 3));
console.log(memoizedSimpleInterest(2000, 10, 2));
console.log(memoizedSimpleInterest(3000, 7, 5));

// Task-8: Create a memoized version of a function that calculates the factorial of a number.

function memoizeFactorial(fn) {
  const cache = {}; // Object to store results of previous computations

  return function (x) {
    if (cache[x] !== undefined) {
      console.log("Returning from cache...");
      return cache[x];
    }
    console.log("Calculating result...");
    const res = fn(x);
    cache[x] = res; // Store the result in cache
    return res;
  };
}

function factorial(num) {
  let res = 1;
  for (let i = num; i >= 1; i--) {
    res = res * i;
  }
  return res;
}

const cachedFactorial = memoizeFactorial(factorial);
console.log(cachedFactorial(6));
console.log(cachedFactorial(5));
console.log(cachedFactorial(4));
console.log(cachedFactorial(4));
console.log(cachedFactorial(3));
