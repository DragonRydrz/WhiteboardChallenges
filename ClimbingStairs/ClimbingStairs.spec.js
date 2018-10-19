const { climbingStairs } = require('./ClimbingStairs');

describe('Climbing Stairs test suite', () => {
  it('should return a number', () => {
    expect(typeof climbingStairs(3)).toBe('number');
  });
  it('should return 4', () => {
    expect(climbingStairs(3)).toBe(4);
  });
});
