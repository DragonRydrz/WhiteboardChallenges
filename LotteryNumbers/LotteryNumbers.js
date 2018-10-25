/*
  Write and algorythm that takes in the `yourNumbers` and `results` as they are formatted.
  It checks yourNumbers against the results and return a 2D array.  
  Return 1 Array for each index in `yourNumbers`.  
  Each of these arrays should have 2 indexes.  
  First value is the number of matching numbers, should be between 0 and the length of the array.
  Second value is a boolean representing if the "Mega Ball", or "Jackpot" number matches.
  Example structures of input and outputs are below.
*/

// This is a list of all your lottery ticket numbers

const yourNumbers = [
  [[15, 28, 32, 55, 60], 18],
  [[13, 14, 33, 35, 57], 11],
  [[2, 23, 28, 36, 51], 20],
  [[23, 30, 32, 54, 62], 24],
  [[13, 31, 40, 55, 57], 8],
  [[32, 33, 39, 52, 56], 5],
  [[24, 25, 33, 53, 66], 24],
  [[6, 15, 46, 62, 69], 4],
  [[6, 23, 30, 43, 56], 10],
  [[6, 13, 22, 35, 62], 17],
  [[1, 26, 44, 45, 62], 11],
];
// This is the structure of the winning numbers.
const results = [[5, 28, 62, 65, 70], 5];
// This should be the output if the above structures are passed into the `checkNumbers` function.
const answer = [
  [1, false],
  [0, false],
  [1, false],
  [1, false],
  [0, false],
  [0, true],
  [0, false],
  [1, false],
  [0, false],
  [1, false],
  [1, false],
];

const checkNumbers = (nums, results) => {
  // Your code here
  return nums.map(game => {
    const numbers = game[0];
    const pb = game[1];
    let matches = 0;

    results[0].forEach(num => {
      if (numbers.includes(num)) matches++;
    });

    return [matches, pb === results[1]];
  });
};

// Do not modify code below this comment
module.exports = { checkNumbers };
