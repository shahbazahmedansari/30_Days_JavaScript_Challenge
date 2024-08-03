// Task-3: Solve the "Container With Most Water" problem on LeetCode.
// Write a function that takes an array of non-negative integers where each integer represents the height of a line drawn at each point.
// Find two lines that together with the x-axis from a container, such that the container holds the most water.
// Log the maximum amount of water for a few test cases.

function maxArea(height) {
  let left = 0;
  let right = height.length - 1;
  let maxWater = 0;

  while (left < right) {
    let width = right - left;
    let minHeight = Math.min(height[left], height[right]);
    let currentWater = width * minHeight;
    maxWater = Math.max(maxWater, currentWater);

    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return maxWater;
}
// Test Cases
console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49
console.log(maxArea([1, 1])); // Output: 1
console.log(maxArea([4, 3, 2, 1, 4])); // Output: 16
console.log(maxArea([1, 2, 1])); // Output: 2
console.log(maxArea([0, 2])); // Output: 0
