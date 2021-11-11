/**
 * Given an input string, returns the shortest word contained in the string.
 *
 * For our purposes, assume words are always separated by a single space.
 *
 * @param {string} string - The input string
 * @returns {string} The shortest word in the input string
 */

function shortestWord(string) {
  // This is your job. :)
  let listOfStrings = string.split(' ');
  console.log(listOfStrings);
  let shortest = listOfStrings[0];
  for(word of listOfStrings)
  {
    if(word.length < shortest.length)
      shortest = word;
  }

  return shortest;
}

if (require.main === module) {
  console.log('Running sanity checks for shortestWord:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let phrase = "Everybody wants to rule the world";
  //console.log(`Out of the phrase '${phrase}', the shortest word is '` + shortestWord(phrase) + `'`);
}

module.exports = shortestWord;
