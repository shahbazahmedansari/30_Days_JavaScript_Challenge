// Task-3: Solve the "Palindrome Number" problem on leetcode.
// Write a function that takes an integer and returns true if it is a palindrome, and false otherwise.
// Log the result for a few test cases, including edge cases like negative numbers.

const isPalindrome = function (x) {
  if (x < 0) return false;
  const reversedNumber = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  );
  if (reversedNumber === x) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
