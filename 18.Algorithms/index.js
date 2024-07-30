// Activity-1: Sorting Algorithms:

// Task-1: Implement the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function bubbleSort(arr) {
  let n = arr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap arr[i] and arr[i + 1]
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
    n--; // Each pass through the array places the next largest value in its correct position
  } while (swapped);
  return arr;
}

// Example usage
let array1 = [23, 91, 54, 10, 78, 60, 35];
console.log("Original array: " + array1);
let sortedArray1 = bubbleSort(array1);
console.log("Sorted array: " + sortedArray1);

// Task-2: Implement the selection sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function selectionSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      let temp = arr[i];
      arr[i] = arr[minIndex];
      arr[minIndex] = temp;
    }
  }
  return arr;
}
let array2 = [56, 78, 90, 24, 46, 31, 71];
console.log("Original array: " + array2);
let sortedArray2 = selectionSort(array2);
console.log("Sorted array: " + sortedArray2);

// Task-3: Implement the quick sort algorithm to sort an array of numbers in ascending order. Log the sorted array.

function quickSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  let pivot = arr[Math.floor(arr.length / 2)];
  let left = [];
  let right = [];
  let equal = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      equal.push(arr[i]);
    }
  }

  return quickSort(left).concat(equal).concat(quickSort(right));
}

let array3 = [23, 85, 78, 45, 31, 56, 90, 12];
console.log("Original array: " + array3);
let sortedArray3 = quickSort(array3);
console.log("Sorted array: " + sortedArray3);

// Activity-2: Searching Algorithms:

// Task-4: Implement the linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      console.log(`Target value ${target} found at index ${i}`);
      return i;
    }
  }
  console.log(`Target value ${target} not found in this array`);
  return -1;
}
const number = [10, 23, 4, 7, 30, 15];
const target1 = 7;
const target2 = 75;
linearSearch(number, target1);
linearSearch(number, target2);

// Task-5: Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.

function binarySearch(arr, target) {
  let lowValue = 0;
  let highValue = arr.length - 1;

  while (lowValue <= highValue) {
    let mid = Math.floor((lowValue + highValue) / 2);

    if (arr[mid] === target) {
      console.log(`Target value ${target} is found at index ${mid}`);
      return mid;
    } else if (arr[mid] > target) {
      highValue = mid - 1;
    } else {
      lowValue = mid + 1;
    }
  }

  console.log(`Target value ${target} not found in this array`);
  return -1;
}
const number2 = [10, 23, 4, 7, 30, 15];
const target3 = 7;
const target4 = 75;
binarySearch(number2, target3);
binarySearch(number2, target4);

// Activity-3: String Algorithms:

// Task-6: Write a function to count the occurrences of each character in a string. Log the character counts.

function characterCount(str) {
  let charCount = {};
  for (let char of str) {
    if (charCount[char]) {
      charCount[char]++;
    } else {
      charCount[char] = 1;
    }
  }
  return charCount;
}
let string = "hello world";
console.log("String: " + string);
let characterCounts = characterCount(string);
console.log("Character counts:", characterCounts);

// Task-7: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function longestSubstring(str) {
  let start = 0;
  let maxLength = 0;
  let maxSubstring = "";
  const charIndexMap = {};

  for (let end = 0; end < str.length; end++) {
    const currentChar = str[end];
    if (charIndexMap[currentChar] >= start) {
      start = charIndexMap[currentChar] + 1;
    }
    charIndexMap[currentChar] = end;
    const currentLength = end - start + 1;
    if (currentLength > maxLength) {
      maxLength = currentLength;
      maxSubstring = str.substring(start, end + 1);
    }
  }

  console.log("Longest substring without repeating characters:", maxSubstring);
  console.log("Length of the longest substring:", maxLength);

  return maxSubstring;
}
const inputStrings = "abcabcbb";
console.log(" ");
longestSubstring(inputStrings);

// Activity-4: Array Algorithms:

// Task-8: Write a function to rotate an array by "k" positions. Log the rotated array.

function rotateArray(arr, k) {
  let n = arr.length;
  k = k % n;
  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
  reverse(0, n - 1);
  reverse(0, k - 1);
  reverse(k, n - 1);
  console.log("Rotated array:", arr);
}
const numberss = [1, 2, 3, 4, 5, 6, 7];
const k = 3;
rotateArray(numberss, k);

// Task-9: Write a function to merge two sorted arrays into one sorted array. Log the merged array.

function sortAndMergeTwoArrays(arr1, arr2) {
  let mergedArray = [];
  let i = 0;
  let j = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  while (i < arr2.length) {
    mergedArray.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    mergedArray.push(arr2[j]);
    j++;
  }
  return mergedArray;
}
let array4 = [1, 3, 5, 7];
let array5 = [2, 4, 6, 8];
console.log("Array 1: " + array4);
console.log("Array 2: " + array5);
let mergedArray = sortAndMergeTwoArrays(array4, array5);
console.log("Merged sorted array: " + mergedArray);

// Activity-5: Dynamic Programming:

// Task-10: Write a function to solve the Fibonnaci sequence using dynamic programming. Log the Fibonnaci numbers.

function fibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];

  let fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib;
}

// Example usage
let n = 10;
console.log("Fibonacci sequence up to " + n + " numbers: " + fibonacci(n));

// Task-11: Write a function to solve the knapsack problem using dynamic programming. Log the maximum value that can be obtained.

function knapsack(weights, values, capacity) {
  let n = weights.length;
  let dp = new Array(n + 1)
    .fill(null)
    .map(() => new Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 0; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        // Include the item
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        // Exclude the item
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

// Example usage
let weights = [2, 3, 4, 5];
let values = [3, 4, 5, 6];
let capacity = 5;

console.log("Weights: " + weights);
console.log("Values: " + values);
console.log("Capacity: " + capacity);
let maxValue = knapsack(weights, values, capacity);
console.log("Maximum value that can be obtained: " + maxValue);
