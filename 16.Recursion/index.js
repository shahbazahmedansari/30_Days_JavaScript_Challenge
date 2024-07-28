// Activity-1: Basic Recursion:

// Task-1: Write a recursive function to calculate the factorial of a number. Log the result for a few test cases.

function findFactorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * findFactorial(num - 1);
}

console.log(findFactorial(5));
console.log(findFactorial(7));
console.log(findFactorial(10));

// Task-2: Write a recursive function to calculate the nth Fibonacci number. Log the result for a few test cases.

function calculateFibonacci(num) {
  if (num <= 1) {
    return num;
  }
  return calculateFibonacci(num - 1) + calculateFibonacci(num - 2);
}
console.log(calculateFibonacci(5));
console.log(calculateFibonacci(10));
console.log(calculateFibonacci(15));
console.log(calculateFibonacci(20));

// Activity-2: Recursion with Arrays:

// Task-3: Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function arraySum(arr) {
  if (arr.length === 0) {
    return 0;
  }
  return arr[0] + arraySum(arr.slice(1));
}
console.log(arraySum([1, 2, 3, 4]));
console.log(arraySum([5, 6, 7, 7, 8, 9]));
console.log(arraySum([10, 12, 20, 50, 30]));

// Task-4: Write a recursive function to find the maximum element in an array. Log the result for a few test cases.

function maxArrayElement(arr) {
  if (arr.length === 1) {
    return arr[0];
  }

  const maxNum = maxArrayElement(arr.slice(1));
  return maxNum < arr[0] ? arr[0] : maxNum;
}

console.log(maxArrayElement([1, 2, 3, 4]));
console.log(maxArrayElement([5, 6, 7, 7, 8, 9]));
console.log(maxArrayElement([10, 12, 20, 50, 30]));

// Activity-3: String Manipulation with Recursion:

// Task-5: Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseString(str) {
  if (str === "") {
    return "";
  }

  return reverseString(str.substr(1)) + str.charAt(0);
}
console.log(reverseString("hello"));
console.log(reverseString("black"));
console.log(reverseString("test"));

// Task-6: Write a recursive function to check if a string is a palindrome. Log the result for a few test cases.

function checkPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  // Base cases
  if (str.length <= 1) {
    return true;
  }

  // Check the first and last characters
  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  // Recursively check the remaining substring
  return checkPalindrome(str.slice(1, -1));
}
console.log(checkPalindrome("test"));
console.log(checkPalindrome("madam"));

// Activity-4: Recursive Search:

// Task-7: Write a recursive function to perform a binary search on a sorted array. Log the index of the target element for a few test cases.

function binarySearch(arr, target, low = 0, high = arr.length - 1) {
  if (low > high) {
    return -1; // Target not found
  }

  const mid = Math.floor((low + high) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] > target) {
    return binarySearch(arr, target, low, mid - 1); // Search in the left half
  } else {
    return binarySearch(arr, target, mid + 1, high); // Search in the right half
  }
}

// Example usage:
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearch(array, 5)); // Output: 4
console.log(binarySearch(array, 1)); // Output: 0
console.log(binarySearch(array, 10)); // Output: 9
console.log(binarySearch(array, 11)); // Output: -1 (not found)

// Task-8: Write a recursive function to count the occurrences of a target element in an array. Log the result for a few test cases.

function findOccurrences(arr, target) {
  if (arr.length === 0) {
    return 0;
  }

  const currentCount = arr[0] === target ? 1 : 0;
  return currentCount + findOccurrences(arr.slice(1), target);
}
const array1 = [1, 2, 3, 4, 2, 2, 5];
const array2 = [7, 8, 7, 9, 7, 10];
const array3 = [1, 1, 1, 1, 1, 1, 1];

console.log(findOccurrences(array1, 2)); // Output: 3
console.log(findOccurrences(array2, 7)); // Output: 3
console.log(findOccurrences(array3, 1)); // Output: 7
console.log(findOccurrences(array3, 2)); // Output: 0 (not found)

// Activity-5: Tree Traversal (Optional):

// Task-9: Write a recursive function to perform an in-order traversal of a binary tree. Log the nodes as they are visited.

class TreeNode {
  constructor(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
function inOrderTraversal(node) {
  if (node === null) {
    return;
  }

  // Traverse the left subtree
  inOrderTraversal(node.left);

  // Visit the root node
  console.log(node.value);

  // Traverse the right subtree
  inOrderTraversal(node.right);
}

// Example usage:
// Creating a binary tree:
//        4
//       / \
//      2   6
//     / \ / \
//    1  3 5  7

const root = new TreeNode(4);
root.left = new TreeNode(2);
root.right = new TreeNode(6);
root.left.left = new TreeNode(1);
root.left.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(7);

// Perform in-order traversal and log the nodes
inOrderTraversal(root);
// Expected output: 1 2 3 4 5 6 7

// Task-10: Write a recursive function to calculate the depth of a binary tree. Log the result for a few test cases.

function calculateDepth(node) {
  if (node === null) {
    return 0; // Base case: an empty tree has a depth of 0
  }

  // Recursively calculate the depth of the left and right subtrees
  const leftDepth = calculateDepth(node.left);
  const rightDepth = calculateDepth(node.right);

  // The depth of the current node is the greater of the depths of its subtrees plus one
  return Math.max(leftDepth, rightDepth) + 1;
}

// Example usage:
// Creating a binary tree:
//        4
//       / \
//      2   6
//     / \ / \
//    1  3 5  7

const root1 = new TreeNode(4);
root1.left = new TreeNode(2);
root1.right = new TreeNode(6);
root1.left.left = new TreeNode(1);
root1.left.right = new TreeNode(3);
root1.right.left = new TreeNode(5);
root1.right.right = new TreeNode(7);

// Calculate the depth of the tree and log the result
console.log(calculateDepth(root)); // Output: 3

// Creating another binary tree:
//        1
//       /
//      2
//     /
//    3

const root2 = new TreeNode(1);
root2.left = new TreeNode(2);
root2.left.left = new TreeNode(3);

// Calculate the depth of the tree and log the result
console.log(calculateDepth(root2)); // Output: 3

// Creating a single node tree:
//    1

const root3 = new TreeNode(1);

// Calculate the depth of the tree and log the result
console.log(calculateDepth(root3)); // Output: 1

// Creating an empty tree
const root4 = null;

// Calculate the depth of the tree and log the result
console.log(calculateDepth(root4)); // Output: 0
