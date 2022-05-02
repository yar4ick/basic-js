const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let maximumValue = 0;
  let i = 0;
  const ns = n.toString();

  while (i < ns.length) {
    const value = parseInt(
      ns
        .split("")
        .map((el, index) => {
          if (index != i) return el;
          else return "";
        })
        .join("")
    );

    if (value > maximumValue) maximumValue = value;

    i++;
  }

  return maximumValue;
}

module.exports = {
  deleteDigit,
};
