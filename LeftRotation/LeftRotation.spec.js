const { leftRotation } = require('./LeftRotation');

describe('Left Rotation Testing Suite', () => {
  // tests here
  it('should return an array', () => {
    expect(Array.isArray(leftRotation([1, 2, 3], 0))).toBeTruthy();
  });
  it('should return [3,4,5,1,2]', () => {
    expect(leftRotation([1, 2, 3, 4, 5], 2)).toMatchObject([3, 4, 5, 1, 2]);
  });
  it('should work with strings', () => {
    expect(leftRotation(['a', 'b', 'c'], 1)).toMatchObject(['b', 'c', 'a']);
  });
  it('should work with mixed data types', () => {
    expect(leftRotation([1, 'a', 2, 'b', 3, 'c'], 5)).toMatchObject([
      'c',
      1,
      'a',
      2,
      'b',
      3,
    ]);
  });
});
