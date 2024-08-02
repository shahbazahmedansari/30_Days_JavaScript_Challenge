// Task-2: Solve the "Reverse Integer" problem on leetcode.
// Write a function that takes an integer and returns it with its digits reversed.
// Handle edge cases like negative numbers and numbers ending in zero.
// Log the reversed integers for a few test cases.

const reverseFunction = function (x) {
  const reversedNumber = parseInt(
    Math.abs(x).toString().split("").reverse().join("")
  );
  if (reversedNumber > 2 ** 31) return 0;
  return reversedNumber * Math.sign(x);
};

console.log(reverseFunction(120));
console.log(reverseFunction(-123));
console.log(reverseFunction(123));
console.log(reverseFunction(4250));
