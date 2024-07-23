// Activity-1: Understanding Promises:

// Task-1: Create a promise that resolves with a message after 2-second timeout and log the message to the console.

const promise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This message will be resolved after 2000");
  }, 2000);
});

promise.then((message) => {
  console.log(message);
});

// Task-2: Create a promise that rejects with an error message after a 2-second timeout and handle the error using "catch()";

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This message is rejected");
  }, 2000);
});

promise2
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Activity-2: Chaining Promises:

// Task-3: Create a sequence of promises that simulate fetching data from a server. Chain the promises to log messages in a specific order.

const promise3 = new Promise((resolve, resject) => {
  setTimeout(() => {
    resolve("This is data from server 1");
  }, 1000);
});

promise3
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is data from server 2");
      }, 1500);
    });
  })
  .then((message) => {
    console.log(message);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("This is data from server 3");
      }, 2000);
    });
  })
  .catch((error) => console.log(error));

// Activity-3: Using Async/Await:

// Task-4: Write an async function that waits for a promise to resolve and then logs the resolved value.

const promise4 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("This is the resolved message");
  }, 1500);
});

async function newMessage() {
  const message = await promise4;
  console.log(message);
}
newMessage();

// Task-5: Write an async function that handles a rejected promise using try-catch and logs the error message.

async function myNewFunction() {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("This is rejected message");
    }, 3000);
  });

  try {
    const message = await promise;
    console.log(message);
  } catch (error) {
    console.log(error);
  }
}

myNewFunction();

// Activity-4: Fetching Data from an API:

// Task-6: Use the "fetch" API to get data from a public API and log the response data to the console using promises.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

// Task-7: Use the "fetch" API to get data from a public API and log the response data to the console using async/await.

async function responseFunction() {
  try {
    let response = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
responseFunction();

// Activity-5: Concurrent Promises:

// Task-8: Use "Promise.all" to wait for multiple promises to resolve and then log their values.

const promise6 = new Promise((resolve, reject) => {
  resolve("This is first resolved message");
});

const promise7 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is second resolved message");
  }, 1000);
});

const promise8 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("This is third resolved message");
  }, 1500);
});

Promise.all([promise6, promise7, promise8])
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });

// Task-9: Use "Promise.race" to log the value of the first promise that resolves among multiple promises.

const promise9 = new Promise((resolve, reject) => {
  resolve("I am Iron man!");
});

const promise10 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("With great power comes great responsibility");
  }, 1000);
});

const promise11 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("I can do this all day!");
  }, 1500);
});

Promise.race([promise9, promise10, promise11])
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });
