const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  let strings = [];
  let resultedArr = [];
  let resObj = {};

  for (let domain of domains) {
    strings.push(".".concat(domain.split(".").reverse().join(".")));
  }

  for (let string of strings) {
    console.log(string);
    let target = ".";
    let pos = 1;

    while (true) {
      let foundPos = string.indexOf(target, pos);
      if (foundPos == -1) break;

      resultedArr.push(string.slice(0, foundPos));
      pos = foundPos + 1;
    }

    resultedArr.push(string);
  }

  resultedArr.forEach((el) => {
    if (resObj[el] === undefined) resObj[el] = 1;
    else resObj[el] += 1;
  });

  return resObj;
}

module.exports = {
  getDNSStats,
};
