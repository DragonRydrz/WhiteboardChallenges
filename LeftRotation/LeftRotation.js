/*
  A left rotation operation on an array shifts each of the array's elements  
  unit to the left. `leftRotation` will recieve 2 arguments.  First will be an array,
  second will be the number of left shifts that need to happen.

  If the array passed in is [1, 2, 3, 4, 5],
  and the number of shifts is 3,
  the output should be [4,5,1,2,3]
*/

const leftRotation = (arr, n) => {
  // Your code here
  return [...arr.slice(n), ...arr.slice(0, n)];
};

// Do not modify code below this comment
module.exports = { leftRotation };
