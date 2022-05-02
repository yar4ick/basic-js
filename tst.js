function minesweeper(matrix) {
  //   throw new NotImplementedError("Not implemented");
  // remove line with error and write your code here

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      if (matrix[i][j] === true) matrix[i][j] = 1;
      if (matrix[i + 1][j + 1] === true)
        isNaN(matrix[i][j]) ? matrix[i][j]++ : (matrix[i][j] = 1);
      if (matrix[i][j + 1] === true)
        isNaN(matrix[i][j]) ? matrix[i][j]++ : (matrix[i][j] = 1);
      if (matrix[i + 1][j] === true)
        isNaN(matrix[i][j]) ? matrix[i][j]++ : (matrix[i][j] = 1);
    }
  }
}

console.log(
  minesweeper([
    [true, false, false],
    [false, true, false],
    [false, false, false],
  ])
);
