const { climbingStairs } = require('./ClimbingStairs');

describe('Climbing Stairs test suite', () => {
  it('should return a number', () => {
    expect(typeof climbingStairs(3)).toBe('number');
  });
  it('should return 4', () => {
    expect(climbingStairs(3)).toBe(4);
  });
  it('should return 274', () => {
    expect(climbingStairs(10)).toBe(274);
  });
  it('should return 53798080', () => {
    expect(climbingStairs(30)).toBe(53798080);
  });
});
