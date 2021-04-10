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
  const arr = str.split('');
  const arr2 = [];
  let curr = null;
  let count = 0;
  let newStr = '';
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== curr) {
      if (count > 0) {
        arr2.push(count + curr);
      }
      curr = arr[i];
      count = 1;
    } else {
      count++;
    }
  }
  if (count > 0) {
    arr2.push(count + curr);
  }
  newStr = arr2.join('').replace(/1/g, '');
  return newStr;
}

module.exports = encodeLine;
