// Task-3: Solve the "Trapping Rain Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers representing an elevation map where the width of each bar is 1, and computes how much water it can trap after raining.
// Log the amount of trapped water for a few test cases.

function trap(height) {
  let n = height.length;
  if (n === 0) return 0;

  let leftMax = new Array(n).fill(0);
  let rightMax = new Array(n).fill(0);

  leftMax[0] = height[0];
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  let waterTrapped = 0;
  for (let i = 0; i < n; i++) {
    waterTrapped += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return waterTrapped;
}

// Test cases
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])); // Output: 6
console.log(trap([4, 2, 0, 3, 2, 5])); // Output: 9
console.log(trap([2, 0, 2])); // Output: 2
console.log(trap([3, 0, 0, 2, 0, 4])); // Output: 10
console.log(trap([1, 0, 1])); // Output: 1
