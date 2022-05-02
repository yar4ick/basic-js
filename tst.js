// function minesweeper(matrix) {
//   //   throw new NotImplementedError("Not implemented");
//   // remove line with error and write your code here

//   for (let i = 0; i < matrix.length; i++) {
//     for (let j = 0; j < matrix[0].length; j++) {
//       if (matrix[i][j] === true) matrix[i][j] = 1;
//       if (matrix[i + 1][j + 1] === true)
//         isNaN(matrix[i][j]) ? matrix[i][j]++ : (matrix[i][j] = 1);
//       if (matrix[i][j + 1] === true)
//         isNaN(matrix[i][j]) ? matrix[i][j]++ : (matrix[i][j] = 1);
//       if (matrix[i + 1][j] === true)
//         isNaN(matrix[i][j]) ? matrix[i][j]++ : (matrix[i][j] = 1);
//     }
//   }

//   return matrix;
// }

// function getSumOfDigits(n) {
//   let sum = 0;

//   n.toString()
//     .split("")
//     .forEach((element) => {
//       sum += parseInt(element, 10);
//     });

//   if (sum >= 10) return getSumOfDigits(sum);

//   return sum;
// }

// console.log(getSumOfDigits(91));

function sortByHeight(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  return arr.sort((a, b) => {
    if (a != -1) return a - b;
    else return a;
  });
}

console.log(sortByHeight([23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]));
