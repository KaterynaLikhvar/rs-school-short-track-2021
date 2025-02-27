/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const arr = String(n).split('').map((item) => Number(item));
  let sum = arr.reduce((a, b) => a + b);
  if (sum > 9) {
    sum = String(sum).split('').map((item) => Number(item));
    sum = sum.reduce((a, b) => a + b);
  }
  return sum;
}

module.exports = getSumOfDigits;
