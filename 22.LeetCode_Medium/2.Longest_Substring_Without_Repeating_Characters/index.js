// Task-2: Solve the "Longest Substring Without Reqpeating Characters" problem on LeetCode.
// Write a function that takes a string and returns the length of the longest substring without repeating characters.
// Log the length for a few test cases, including edge cases.

function findLongestSubstring(str) {
  let n = str.length;
  let set = new Set();
  let maxLength = 0,
    i = 0,
    j = 0;

  while (i < n && j < n) {
    if (!set.has(str[j])) {
      set.add(str[j]);
      j++;
      maxLength = Math.max(maxLength, j - i);
    } else {
      set.delete(str[i]);
      i++;
    }
  }
  return maxLength;
}
// Test Cases
console.log(findLongestSubstring("abcabcbb")); // Output: 3 (The answer is "abc")
console.log(findLongestSubstring("bbbbb")); // Output: 1 (The answer is "b")
console.log(findLongestSubstring("pwwkew")); // Output: 3 (The answer is "wke")
console.log(findLongestSubstring("")); // Output: 0 (Empty string)
console.log(findLongestSubstring("dvdf")); // Output: 3 (The answer is "vdf")
console.log(findLongestSubstring("au")); // Output: 2 (The answer is "au")
