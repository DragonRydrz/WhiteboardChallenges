/* 
  Impliment a bubble sort algorithm.
*/

function swap(arr, i, j) {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

const bubble = arr => {
  // Start at the beginning of the array, compare/swap to move
  // the larger number to the end of the array.
  let swaps = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        swaps = true;
      }
    }
    if (!swaps) {
      break;
    } else {
      swaps = false;
    }
  }
  return arr;
};

const selection = arr => {
  // Start at the beginning, loop thought the remainder of the array,
  // to find the lowest avaliable value, and swap it into the array
  // where it belongs. O(n^2)
  let lowIndex = 0;
  let lowValue;
  let needSwap = false;
  for (let i = 0; i < arr.length; i++) {
    lowValue = arr[i];
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < lowValue) {
        lowValue = arr[j];
        lowIndex = j;
        needSwap = true;
      }
    }
    if (needSwap) {
      swap(arr, i, lowIndex);
      needSwap = false;
    }
  }
  return arr;
};

const insertion = arr => {
  // Starts at the beginning, selects each element, then compares
  // it to each element before it, swapping with the value before
  // if it is smaller.  Once it is where it belongs, move on to
  // the next value in the array.
  let currentIndex;
  for (let i = 1; i < arr.length; i++) {
    currentIndex = i;
    while (arr[currentIndex] < arr[currentIndex - 1] && currentIndex > 0) {
      swap(arr, currentIndex, currentIndex - 1);
      currentIndex--;
    }
  }
  return arr;
};

const quick = arr => {
  // Pick a pivot, place all elements lower then it to the left,
  // higher elements to the right.  Call recursivly on each subarray.
  // concat together when only one element in the array.
  return arr;
};

module.exports = {
  bubble,
  selection,
  insertion,
  quick,
};
