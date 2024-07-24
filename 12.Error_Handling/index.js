// Activity-1: Basic Error Handling with Try-Catch:

// Task-1: Write a function that intentionally throws an error and use a try-catch block to handle the error and log an appropriate message to the console.

function checkError() {
  const promise = new Promise((resolve, reject) => {
    reject("This is the rejected message");
  });

  try {
    promise.then((message) => console.log(message));
  } catch (error) {
    console.log(error);
  }
}
checkError();

// Task-2: Create a function that divides two numbers and throws an error if the denominator is zero. Use a try-catch block to handle this error.

function numberDivisibleByTwo(numerator, denominator) {
  try {
    if (denominator !== 0) {
      console.log(numerator / denominator);
    } else {
      throw new Error("Denominator cannot be zero");
    }
  } catch (error) {
    console.log(`${error.message}`);
  }
}

numberDivisibleByTwo(5, 4);
numberDivisibleByTwo(5, 0);

// Activity-2: Finally Block:

// Task-3: Write a script that includes a try-catch block and a finally block. Log messages in the try, catch, and finally blocks to observe the execution flow.

function performTask() {
  try {
    // code that may throw and error
    console.log("Inside the try block - 1");
    // Simulating an error
    throw new Error("Simulated error");
  } catch (error) {
    console.log(error.message);
  } finally {
    console.log("Inside finally block");
  }
}

console.log(performTask());

// Activity-3: Custom Error Objects:

// Task-4: Create a custom error class that extends the built-in Error class. Throw an instance of this custom error in a function and handle it using a try-catch block.

function isEven(num) {
  if (num === 0) {
    throw new Error("Input number cannot be zero");
  }
  try {
    if (num % 2 === 0) {
      console.log("Number is even");
    } else {
      console.log("Number is odd");
    }
  } catch (error) {
    console.log(`${error.message}`);
  }
}
isEven(4);
isEven(5);
isEven(0);

// Task-5: Write a fucntion that validates user input (e.g. checking if a string is not empty) and throws a custom error if the validation fails. Handle the custom error using try-catch block.

function checkString(str) {
  if (str === "") {
    throw new Error("Input string cannot be empty");
  }

  try {
    console.log(str.length);
  } catch (error) {
    console.log(`${error.message}`);
  }
}

checkString("Hi there!");
checkString("");

// Activity-4: Error Handling in Promises:

// Task-6: Create a promise that randomly resolves or rejects. Use ".catch()" to handle the rejection and log an appropriate message to the console.

function checkPromise() {
  return new Promise((resolve, reject) => {
    // Generate a random number between 0 and 1
    const randomNumber = Math.random();

    // Set a timeout to simulate asynchronous operation
    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve("Promise resolved successfully!");
      } else {
        reject("Promise rejected.");
      }
    }, 1000); // 1000 milliseconds = 1 second
  });
}

checkPromise()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));

// Task-7: Use try-catch within an async function to handle errors from a promise that randomly resolves or rejects, and log the error message.

async function randomPromise() {
  const promise = new Promise((resolve, reject) => {
    const randomNumber = Math.random();

    setTimeout(() => {
      if (randomNumber < 0.5) {
        resolve(randomNumber);
      } else {
        reject(new Error("Promise rejected"));
      }
    }, 1000);
  });

  try {
    const check = await promise;
    console.log("Promise resolved: " + check);
  } catch (error) {
    console.log("Promise rejected: " + error);
  }
}
randomPromise();

// Activity-5: Graceful Error Handling in Fetch:

// Task-8: Use the "fetch" API to request data from an invalid URL and handle the error using ".catch()". Log an appropriate message to the console.

fetch("https://invalidurl.com/")
  .then((res) => console.log(res.json()))
  .catch((error) => console.log(error));

// Task-9: Use the "fetch" API to request data from an invalid URL within an async function and handle the error using try-catch. Log an appropriate error message.

async function fetchNewData() {
  try {
    const response = await fetch("https://invalidurl.com/");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

fetchNewData();
