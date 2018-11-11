/* 

  Complete the alternatingCharacters function in the editor below. 
  It must return an integer representing the minimum number of deletions 
  to make the alternating string.

  AAAA      Returns 3
  BBBBB     Returns 4
  ABABABAB  Returns 0
  BABABA    Returns 0
  AAABBB    Returns 4

*/

const alternatingCharacters = str => {
  // Your code here
  let firstCharacter = str[0];
  let secondCharacter;
  let deleted = 0;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === firstCharacter) {
      deleted++;
    } else {
      secondCharacter = firstCharacter;
      firstCharacter = str[i];
    }
  }
  return deleted;
};

// Do not modify code below this line
module.exports = { alternatingCharacters };
