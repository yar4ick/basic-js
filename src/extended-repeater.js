const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   remove line with error and write your code here
// }

function repeater(str, options) {
  const separator = !options.separator ? "+" : options.separator;
  let additionalStr = "";
  let strToAdd = str;

  if (options.addition != undefined || options.addition === null) {
    const addSeparator = !options.additionSeparator
      ? "|"
      : options.additionSeparator;
    additionalStr = repeater(options.addition, {
      repeatTimes: options.additionRepeatTimes,
      separator: addSeparator,
    });
  }

  if (additionalStr != "") {
    strToAdd = str + additionalStr;
  }

  let resultedString = strToAdd;

  if (options.repeatTimes != undefined) {
    for (let i = 0; i < options.repeatTimes - 1; i++) {
      resultedString = resultedString + separator + strToAdd;
    }
  }

  return resultedString;
}

module.exports = {
  repeater,
};
