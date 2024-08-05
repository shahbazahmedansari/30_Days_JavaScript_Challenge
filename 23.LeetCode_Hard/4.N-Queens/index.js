// Task-4: Solve the "N-Queens" problem on LeetCode.
// Write a function that places n-queens on an nxn chessboard such that no two queens attack each other, and returns all distinct solutions to the n-queen puzzle.
// Log the distinct solution for a few test cases.

function solveNQueens(n) {
  const solutions = [];

  function solve(
    row = 0,
    diagonals = new Set(),
    antiDiagonals = new Set(),
    cols = new Set(),
    board = []
  ) {
    if (row === n) {
      solutions.push(
        board.map((col) => ".".repeat(col) + "Q" + ".".repeat(n - col - 1))
      );
      return;
    }

    for (let col = 0; col < n; col++) {
      const diagonal = row - col;
      const antiDiagonal = row + col;
      if (
        cols.has(col) ||
        diagonals.has(diagonal) ||
        antiDiagonals.has(antiDiagonal)
      ) {
        continue;
      }

      cols.add(col);
      diagonals.add(diagonal);
      antiDiagonals.add(antiDiagonal);
      board.push(col);

      solve(row + 1, diagonals, antiDiagonals, cols, board);

      cols.delete(col);
      diagonals.delete(diagonal);
      antiDiagonals.delete(antiDiagonal);
      board.pop();
    }
  }
  solve();
  return solutions;
}

// Test cases
console.log(solveNQueens(4));
// Output: [[".Q..","...Q","Q...","..Q."], ["..Q.","Q...","...Q",".Q.."]]

console.log(solveNQueens(1));
// Output: [["Q"]]

console.log(solveNQueens(8));
// Outputs multiple solutions, for example, one of the solutions is:
// [["Q.......","..Q.....","....Q...","......Q.",".......Q",".....Q..","...Q....",".Q......"]]
