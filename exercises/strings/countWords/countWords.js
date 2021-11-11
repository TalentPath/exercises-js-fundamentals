/**
 * Given an input string, returns number of words contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {number} The number of words in the string.
 */

function countWords(string) {
  let str = string.split(" ")
  return str.length
}

if (require.main === module) {
  console.log('Running sanity checks for countWords:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?

  console.log(countWords("Hello how are you"))
  console.log(countWords("How else will you be sure your code does what you think it does?"))
}

module.exports = countWords;
