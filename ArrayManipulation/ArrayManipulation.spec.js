const arrayManipulation = require('./ArrayManipulation').arrayManipulation;

describe('Array Manipulation Test Suite', () => {
  it('should return 10', () => {
    const n = 10;
    const queries = [[1, 5, 3], [4, 8, 7], [6, 9, 1]];
    expect(arrayManipulation(n, queries)).toBe(10);
  });
  it('should return 20', () => {
    const n = 300;
    const queries = [
      [20, 150, 15],
      [299, 300, 4000],
      [120, 170, 1452],
      [1, 300, 45185],
    ];
    expect(arrayManipulation(n, queries)).toBe(49185);
  });
});
