// Task-5: Solve the "Valid Parentheses" problem on leetcode.
// Write a function that takes a string containing just the characters '(', ')', '{', '}', '[', and ']', and determines if the input string is valid.
// A string is valid if the open brackets are closed in the correct order.
// Log the result for a few test cases.

const isValid = function (str) {
  const stack = [];
  const matchingBrackets = {
    "}": "{",
    ")": "(",
    "]": "[",
  };

  for (let char of str) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      if (stack.length === 0 || stack.pop() !== matchingBrackets[char]) {
        return false;
      }
    }
  }

  return stack.length === 0;
};

console.log(isValid("()"));
console.log(isValid("(]"));
console.log(isValid("(]{}"));
console.log(isValid("(){}[]"));
console.log(isValid("(}{][)"));
