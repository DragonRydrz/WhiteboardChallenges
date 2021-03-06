/*
  Write a function called rockPaperScissors that will take as input an integer n. 
  Your function should output all of the possible combinations of the three plays 
  'rock', 'paper', or 'scissors' up to the given integer n.

  For example, for n = 2, your function should output:

  [[rock, rock], [rock, paper], [rock, scissors],
  [paper, rock], [paper, paper], [paper, scissors], [scissors, rock],
  [scissors, paper], [scissors, scissors]]

  So your output should be an array of arrays, where the length of each inner array is n.
*/

const rockPaperScissors = n => {
  // Your code here
  const arr = ['rock', 'paper', 'scissor'];
  const rv = [];
  let current = [];

  const build = (roundsLeft, result) => {
    if (!roundsLeft) {
      rv.push(result);
      return;
    }
    arr.forEach(play => {
      build(roundsLeft - 1, result.concat(play));
    });
  };
  build(n, []);
  return rv;
};

// Do not alter code below this line
module.exports = { rockPaperScissors };
