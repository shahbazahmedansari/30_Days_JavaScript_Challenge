// Activity-1: Basic Regular Expressions:

// Task-1: Write a regular expression to match a simple pattern (e.g., match all occurrences of the word "Javscript" in a string). Log the matches.

const text1 = "Javascript is a very popular language.";
const regex1 = /Javascript/g;
const matches1 = text1.match(regex1);
console.log(matches1);

// Task-2: Write a regular expression to match all digits in a string. Log the matches.

const text2 = "My phone number is 123-456-7890 and my zip code is 90210.";
const regex2 = /\d/g;
const matches2 = text2.match(regex2);
console.log(matches2);

// Activity-2: Character Classes and Identifiers:

// Task-3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const text3 = "Hello World! This is a Regular Expression Test.";
const regex3 = /\b[A-Z][a-z]*\b/g;
const matches3 = text3.match(regex3);
console.log(matches3);

// Task-4: Write a regular expression to match all sequences of the one or more digits in a string. Log the matches.

const text4 = "There are 15 apples and 20 oranges.";
const regex4 = /\d+/g;
const matches4 = text4.match(regex4);
console.log(matches4);

// Activity-3: Grouping and Capturing:

// Task-5: Write a regular expression to capture the area code,central office code, and line number from a US phone number format (e.g.,(123) 456-7890). Log the captures.

const phone = "(123) 456-7890";
const regex5 = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const matches5 = phone.match(regex5);
console.log(matches5);

// Task-6: Write a regular expression to capture the username and domain from an email address. Log the captures.

const email = "himanshu@example.com";
const regex6 = /([^@]+)@([^@]+)/;
const matches6 = email.match(regex6);
console.log(matches6);

// Activity-4: Assertions and Boundaries:

// Task-7: Write a regular expression to match a word only if it is at the beginning of the string. Log the matches.

const text7 = "Javascript is fun. Javascript is powerful.";
const regex7 = /^\w+/;
const matches7 = text7.match(regex7);
console.log(matches7);

// Task-8: Write a regular expression to match a word only if it is at the end of the string. Log the matches.

const text8 = "Learn Javascript, use Javascript.";
const regex8 = /\w+$/;
const matches8 = text8.match(regex8);
console.log(matches8);

// Activity-5: Practical Applications:

// Task-9: Write a regular expression to validate a simple password (must include at least one uppercase letter, one lowercase letter,one digit, and one special character). Log whether the password is valid.

const password = "Password1!";
const regex9 =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':",.<>/?])(?!.*\s).{8,}$/;

const isValid = regex9.test(password);

if (isValid) {
  console.log("Password is valid.");
} else {
  console.log("Password is invalid");
}

// Task-10: Write a regular expression to validate a URL. Log the whether the URL is valid.

const url = "https://www.example.com/path/to/resource?query=string#fragment";

const regex10 =
  /^(https?:\/\/)?(www\.)?[\w-]+\.[a-z]{2,}(\/[\w-]*)*(\?[;&a-z=\d%_]*)?(\#[\w-]*)?$/i;

const isValid2 = regex10.test(url);

if (isValid2) {
  console.log("URL is valid");
} else {
  console.log("URL is invalid");
}
