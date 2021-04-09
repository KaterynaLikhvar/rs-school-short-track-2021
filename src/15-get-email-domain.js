/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let count = 0;
  const newEmail = email.replace(/@/g, ' ').split(' ').slice(-1).join('');
  count = newEmail.split('.').length - 1;
  if (count === 1) {
    return newEmail;
  }
  const lastIndex = newEmail.lastIndexOf('.');
  return newEmail.slice(0, lastIndex);
}

module.exports = getEmailDomain;
