/*
Given a package with a weight limit limit and an array arr of item weights, implement a function getIndicesOfItemWeights that finds two items whose sum of weights equals the weight limit limit. Your function should return a pair [i, j] of the indices of the item weights, ordered such that i > j. If such a pair doesn’t exist, return an empty array.

Analyze the time and space complexities of your solution.

Example:

input:  arr = [4, 6, 10, 15, 16]
        limit = 21
output: [3, 1]   // since these are the indices of 
                 // weights 6 and 15 whose sum equals 21


 */

const mergingTwoPackages = (arr, limit) => {
  // Your Code Here
  const cache = {};
  const rv = [];

  for (let i = 0; i < arr.length; i++) {
    const missingValue = limit - arr[i];
    if (cache[arr[i]]) {
      rv.push(i, cache[arr[i]]);
      return rv;
    }
    cache[missingValue] = i;
  }
  return rv;
};

// Do not modify code below this line
module.exports = { mergingTwoPackages };
