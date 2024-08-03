// Task-5: Solve the "Group Anagrams" problem on LeetCode.
// Write a function that takes an array of strings and groups anagrams together.
// Log the grouped anagrams for a few test cases.

function groupAnagrams(strs) {
  const map = new Map();

  for (let str of strs) {
    // Sort the string to get the anagram key
    let sortedStr = str.split("").sort().join("");

    // If the key is not in the map, add it with an empty array
    if (!map.has(sortedStr)) {
      map.set(sortedStr, []);
    }

    // Add the original string to the appropriate group
    map.get(sortedStr).push(str);
  }

  // Convert map values to an array of arrays
  return Array.from(map.values());
}
// Test Cases
console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
// Output: [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]

console.log(groupAnagrams([""]));
// Output: [[""]]

console.log(groupAnagrams(["a"]));
// Output: [["a"]]

console.log(groupAnagrams(["abc", "bca", "cab", "bac", "acb", "cba"]));
// Output: [["abc", "bca", "cab", "bac", "acb", "cba"]]

console.log(groupAnagrams(["abcd", "dcba", "bcad", "dabc", "efgh", "ghfe"]));
// Output: [["abcd", "dcba", "bcad", "dabc"], ["efgh", "ghfe"]]
