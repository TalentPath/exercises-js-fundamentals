/**
 * Given an input string, a target character to find, and a replacement character,
 * returns a copy of the input string with the target character replaced by the
 * replacement character.
 *
 * @example
 * replaceCharacter('hello', 'l', '8'); // => 'he88o'
 *
 * @param {string} string - The string to replace a character in
 * @param {string} target - The target letter
 * @param {string} replaceWith - The replacement letter
 * @returns {string} A copy of the input string with target replaced by replaceWith
 */

function replaceCharacter(string, target, replaceWith) {
  // This is your job. :)
  let listOfCharacters = string.toLowerCase().split('');
  for(let i = 0; i < string.length; i++)
  {
    if(listOfCharacters[i] == target)
      listOfCharacters[i] = replaceWith;
  }
  string = listOfCharacters.join('');
  return string;
}

if (require.main === module) {
  console.log('Running sanity checks for replaceCharacter:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let word = 'mississippi';
  console.log(`We shall now replace all of the letter s in the word ${word} with the number 5: ` +
  replaceCharacter(word, 's', '5'))
}

module.exports = replaceCharacter;
