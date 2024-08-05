// Task-5: Solve the "Word Ladder" problem on LeetCode.
// Write a function that takes a begin word, an end word, and a dictionary of words, and finds the length of the shortest transformation sequence
// from the begin word to the end word, such that only one letter can be changed at a time and each transformed word must exist in the word list.
// Log the length of the shortest transformation sequence for a few test cases.

function ladderLength(beginWord, endWord, wordList) {
  const wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return 0;

  const queue = [[beginWord, 1]]; // Queue holds [currentWord, currentLevel]

  while (queue.length > 0) {
    const [currentWord, level] = queue.shift();

    if (currentWord === endWord) {
      return level;
    }

    for (let i = 0; i < currentWord.length; i++) {
      for (let c = 97; c <= 122; c++) {
        // 'a' to 'z'
        const newWord =
          currentWord.slice(0, i) +
          String.fromCharCode(c) +
          currentWord.slice(i + 1);

        if (wordSet.has(newWord)) {
          queue.push([newWord, level + 1]);
          wordSet.delete(newWord); // Remove from set to prevent revisiting
        }
      }
    }
  }

  return 0; // No transformation sequence found
}

// Test cases
console.log(
  ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])
);
// Output: 5 ("hit" -> "hot" -> "dot" -> "dog" -> "cog")

console.log(ladderLength("hit", "cog", ["hot", "dot", "dog", "lot", "log"]));
// Output: 0 (No valid transformation sequence as "cog" is not in wordList)

console.log(ladderLength("a", "c", ["a", "b", "c"]));
// Output: 2 ("a" -> "c")

console.log(ladderLength("hit", "hot", ["hot"]));
// Output: 2 ("hit" -> "hot")
