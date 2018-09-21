/* 
  Impliment a bubble sort algorithm.
*/

const bubble = arr => {
  // Start at the beginning of the array, compare/swap to move
  // the larger number to the end of the array.
};

const selection = arr => {
  // Start at the beginning, loop thought the raminder of the array,
  // to find the lowest avaliable value, and swap it into the array
  // where it belongs. O(n^2)
};

const insertion = arr => {
  // Starts at the beginning, selects each element, then compares
  // it to each element before it, swapping with the value before
  // if it is smaller.  Once it is where it belongs, move on to
  // the next value in the array.
};

const quick = arr => {
  // Pick a pivot, place all elements lower then it to the left,
  // higher elements to the right.  Call recursivly on each subarray.
  // concat together when only one element in the array.
};

module.exports = {
  bubble,
  selection,
  insertion,
  quick,
};
