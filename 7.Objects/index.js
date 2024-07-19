// Activity-1: Object Creation and Access:

// Task-1: Create an object representing a book with properties like title, author, and year, and log the object to the console.

const bookDetails = {
  title: "Harry Potter",
  author: "J. K. Rowling",
  year: 2002,
};

console.log(bookDetails);

// Task-2: Access and log the title and author properties of book object.

console.log(bookDetails.title);
console.log(bookDetails.author);

// Activity-2: Object Methods:

// Task-3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.

bookDetails.info = function info() {
  return `The book's title is ${this.title} and it's author is ${this.author}`;
};

console.log(bookDetails.info());

// Task-4: Add a method to the book object that takes a parameter (year) and updates the book's year property then log the updated object.

bookDetails.updateYear = function updateYear(newYear) {
  return (this.year = newYear);
};
console.log(bookDetails.updateYear(2012));

// Activity-3: Nested Objects:

// Task-5: Create a nested object representing a library with properties like name and books (an array of book objects) and log the library object to the console.

const library = {
  name: "Fresh Book Library",
  books: [
    {
      title: "Rich Dad & Poor Dad",
      author: "Robert Kiyosaki",
      yaer: 1996,
    },
    {
      title: "My Life in Full",
      author: "Indira Nooyi",
      year: 2024,
    },
  ],
};

console.log(library);

// Task-6: Access and log the name of the library and the titles of all the books in the library.

console.log(library.name);
console.log(library.books.map((book) => book.title));

// Activity-4: The "this" keyword:

// Task-7: Add a method to the book object that uses the "this" keyword to return a string with the book's title and year, and log the result of calling this method.

bookDetails.newInfo = function newInfo() {
  return `The books's title is ${this.title} and the year is ${this.year}`;
};
console.log(bookDetails.newInfo());

// Activity-5: Object iteration:

// Task-8: Use a "for...in" loop to iterate over the properties of the book object and log each property and its value.

for (const property in bookDetails) {
  console.log(`${property} has a value of ${bookDetails[property]}`);
}

// Task-9: Use "object.keys" and "Object.values" method to log all the keys and values of the book object.
console.log(Object.keys(bookDetails));
console.log(Object.values(bookDetails));
