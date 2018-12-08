/*
  Write a function that takes an array of strings.  In that array, there are 2 strings that differ by only one character.
  Remove the mismatched character, and return the characters that are the same in the 2 strings.
  Example:
  Input = ['qwerty', 'qwedty', 'fjeisd', 'eidspc', 'gjdeis', 'padstn']
  'qwerty' and 'qwedty' have 5 out of 6 matching characters (in the same position).
  Return = 'qwety'
  If none exist, return false.
*/

function oneLetterDifference(arr) {
  // Your code here
  let no = 0;
  let good = '';
  for (let i = 0; i < arr.length; i++) {
    const first = arr[i];

    for (let j = 0; j < arr.length; j++) {
      const second = arr[j];
      good = '';
      no = 0;
      for (let x = 0; x < second.length; x++) {
        if (first[x] !== second[x]) {
          no++;
        } else {
          good += first[x];
        }
        if (no > 1) break;
        if (x === second.length - 1 && no === 1) {
          return good;
        }
      }
    }
  }
  return false;
}

// Do not modify code below this line
module.exports = { oneLetterDifference };
