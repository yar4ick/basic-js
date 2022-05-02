const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  if (arr.length === 0) return [];

  const COMMANDS = {
    d_next: "--discard-next",
    d_prev: "--discard-prev",
    db_next: "--double-next",
    db_prev: "--double-prev",
  };

  let resultedArr = [];
  let i = 0;

  while (i < arr.length) {
    switch (arr[i]) {
      case COMMANDS.d_next:
        if (arr[i + 2] === COMMANDS.d_prev || arr[i + 2] === COMMANDS.db_prev) {
          i += 2;
        } else i++;
        break;

      case COMMANDS.d_prev:
        resultedArr.pop();
        break;

      case COMMANDS.db_next:
        if (arr[i + 1] != undefined) resultedArr.push(arr[i + 1]);
        break;

      case COMMANDS.db_prev:
        if (i > 0) resultedArr.push(arr[i - 1]);
        break;

      default:
        resultedArr.push(arr[i]);
        break;
    }

    i++;
    console.log("end i:" + i);
  }

  return resultedArr;
}

module.exports = {
  transform,
};
