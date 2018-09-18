/**
    You've been hired to write the software to count the votes for a local election. Write a function countVotes that receives an array of (unique) names, each one representing a vote for that person. Your function should return the name of the winner of the election. In the case of a tie, the person whose name comes last alphabetically wins the election (a dumb rule to be sure, but the votes don't need to know).

    Example:

    const votes = ['veronica', 'mary', 'alex', 'james', 'mary', 'michael', 'alex', 'michael'];

    countVotes(votes);  // should return 'michael'
    Analyze the time and space complexity of your solution.
 */

const votes = [
  'veronica',
  'mary',
  'alex',
  'james',
  'mary',
  'michael',
  'alex',
  'michael',
];

const countVotes = arr => {
  const counts = {};
  let maxVotes = 0;
  let winner = '';
  // Iterate over entire array
  arr.forEach(v => {
    // If name doesnt exist in counts yet, add it with a value of 0
    if (!counts[v]) counts[v] = 0;
    // Increment the count of the name
    counts[v]++;
    // Check to see if current name has more votes then the current max
    if (counts[v] > maxVotes) {
      // Sets the max votes to the current names votes if larger
      maxVotes = counts[v];
      // Since this name has more votes, its currently the winner
      winner = v;
      // Checks to see if current name is tied to the winner
    } else if (counts[v] === maxVotes) {
      // if tied, sets the winner to the name that is greater (last alphabetically)
      if (v > winner) winner = v;
    }
  });
  return winner;
};

/**
 * This algorithm is in linear time.  O(n).  It runs through each name in the array once.
 * Since the array consists of votes, and every one has to be touched once to be counted,
 * this can not be done any faster then O(n)
 */

// console.log(countVotes(votes)); // should return 'michael'

module.exports = { countVotes };
