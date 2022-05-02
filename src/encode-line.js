const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  let counter = 0;
  let resultStr = "";

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) counter++;
    else if (counter > 0) {
      counter++;
      resultStr += counter.toString() + str[i];
      counter = 0;
    } else resultStr += str[i];
  }

  return resultStr;
}

module.exports = {
  encodeLine,
};
