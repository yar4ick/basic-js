const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  const LOGARITHM = Math.log(2);

  if (typeof sampleActivity != "string") return false;

  const decayRate = parseFloat(sampleActivity, 10);

  if (Number.isNaN(decayRate) || decayRate === undefined) return false;
  if (decayRate > 15.0 || decayRate <= 0) return false;

  const rateConstant = LOGARITHM / HALF_LIFE_PERIOD;

  return Math.ceil(Math.log(MODERN_ACTIVITY / decayRate) / rateConstant);
}

module.exports = {
  dateSample,
};
