/*
  A child is running up a staircase that has n steps. The child can hop either 1, 2, or 3 steps at a time. 
  Write a function climbStairs that counts the number of possible ways in which the child can climb the staircase.

  For example, for a staircase with n = 3 (the stair has 3 steps), there are 4 ways to climb the staircase:

  3 hops of 1
  A jump of 1 followed by a jump of 2
  A jump of 2 followed by a jump of 1
  A single jump of 3
  So climbStairs(3) should return 4.
*/

const climbingStairs = n => {
  // Code here
  let count = 0;
  const recurse = currentStairs => {
    if (currentStairs === n) count++;
    for (let i = 1; i <= 3; i++) {
      if (currentStairs + i <= n) recurse(currentStairs + i);
    }
  };
  recurse(0);
  return count;
};

// Do not alter anything below this comment
module.exports = { climbingStairs };
