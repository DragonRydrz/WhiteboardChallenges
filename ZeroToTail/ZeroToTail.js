/* 
    Move all the '0's in the array to the end.
    Input:  [0,1,2,0,3,0,4,6,0]
    Output: [1,2,3,4,6,0,0,0,0]

    O(n). No new Array.
*/

function zeroTail(arr) {
  let tail = arr.length - 1;
  for (let i = 0; i < arr.length; i++) {
    while (arr[tail] === 0) {
      tail--;
    }
    if (tail <= i) return arr;
    if (arr[i] === 0) swap(i, tail);
  }
  return arr;
  function swap(head, tail) {
    const t = arr[head];
    arr[head] = arr[tail];
    arr[tail] = t;
  }
}

// console.log(zeroTail([0, 1, 2, 0, 3, 0, 4, 6, 0]));

module.exports = { zeroTail };
