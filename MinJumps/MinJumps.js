// Given an array of integers where each element represents the maximum number of steps that can be made forward from that element,
// write a function to return the minimum number of jumps to reach the end of the array, starting from the first element.
// If an element is 0, then we cannot move through that element.

// const arr = [1, 3, 5, 8, 9, 2, 6, 7, 6, 8, 9]
// Output: 3 (1-> 3 -> 8 ->9)
// const arr = [1, 3, 6, 3, 2, 3, 6, 8, 9, 5]
const arr = [2, 0, 0, 5, 8, 1, 7, 4, 9, 12, 1];
const jumps = arr => {
  let jumpCount = arr.length;

  const recurse = (currentIndex, currentJumps) => {
    let currentValue = arr[currentIndex];
    if (currentIndex >= arr.length) {
      jumpCount = Math.min(jumpCount, currentJumps);
      return jumpCount;
    }
    let zeroCheck = true;
    for (let i = 1; i <= currentValue; i++) {
      if (arr[currentIndex + 1] !== 0) zeroCheck = false;
      recurse(currentIndex + i, currentJumps + 1);
    }
    if (zeroCheck) return Infinity;
  };

  return recurse(0, 0) || jumpCount;
};
console.log(jumps(arr));
