/* 
    Starting with a 1-indexed array of zeros and a list of operations, for each operation 
    add a value to each of the array element between two given indices, inclusive. Once all 
    operations have been performed, return the maximum value in your array.

    For example, the length of your array of zeros `n = 10` Your list of queries is as follows:

    a b k
    1 5 3
    4 8 7
    6 9 1

    Add the values of k between the indices a and b inclusive:

    index->	 1 2 3  4  5 6 7 8 9 10
	        [0,0,0, 0, 0,0,0,0,0, 0]
	        [3,3,3, 3, 3,0,0,0,0, 0]
	        [3,3,3,10,10,7,7,7,0, 0]
	        [3,3,3,10,10,8,8,8,1, 0]
*/

const arrayManipulation = (n, queries) => {
  let max = 0;
  let count = 0;
  const r = Array(n).fill(0);
  queries.forEach(a => {
    console.log(a);
    r[a[0] - 1] += a[2];
    r[a[1]] -= a[2];

    console.log(r);
  });
  r.forEach(a => {
    count += a;
    if (count > max) max = count;
  });
  return max;
};

// console.log(arrayManipulation(5, [[1, 2, 100], [2, 5, 100], [3, 4, 100]]));

module.exports = { arrayManipulation };
