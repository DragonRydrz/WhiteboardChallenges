/*
  Check to see if a string can be arranged to be a palindrome. (Identical frowards and backwards).
  Return true or false.
  'aaabbeedd' should return true.  Can be rearranged to make 'abedadeba' which is a palindrome.
  'aaabbb' should return false.  This can not be rearranged into a Palindrome
*/

function canBePalindrome(str) {
  // Your code here
  const track = {};
  for (let i = 0; i < str.length; i++) {
    if (!track[str[i]]) track[str[i]] = 0;
    ++track[str[i]];
  }
  let oddCount = 0;
  for (let n in track) {
    if (track[n] % 2 === 1) oddCount++;
  }
  return oddCount < 2;
}

// Do not modify code below this comment
module.exports = { canBePalindrome };
