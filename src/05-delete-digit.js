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
  const str = String(n);
  let str2 = '';
  if (str.includes(0)) {
    str2 = str.replace(0, '');
    return Number(str2);
  }
  str2 = str.replace(1, '');
  return Number(str2);
}

module.exports = deleteDigit;
