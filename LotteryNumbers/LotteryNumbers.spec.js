const { checkNumbers } = require('./LotteryNumbers');

const yourNumbers = [
  [[15, 28, 32, 55, 60], 18],
  [[13, 14, 33, 35, 57], 11],
  [[2, 23, 28, 36, 51], 20],
  [[23, 30, 32, 54, 62], 24],
  [[13, 31, 40, 55, 57], 8],
  [[32, 33, 39, 52, 56], 5],
  [[24, 25, 33, 53, 66], 24],
  [[6, 15, 46, 62, 69], 4],
  [[6, 23, 30, 43, 56], 10],
  [[6, 13, 22, 35, 62], 17],
  [[1, 26, 44, 45, 62], 11],
];

const results = [[5, 28, 62, 65, 70], 5];

const answer = [
  [1, false],
  [0, false],
  [1, false],
  [1, false],
  [0, false],
  [0, true],
  [0, false],
  [1, false],
  [0, false],
  [1, false],
  [1, false],
];

describe('Lottery Numbers Testing Suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(checkNumbers(yourNumbers, results))).toBeTruthy();
  });
  it(`should have a length equal to the nums array passed in - ${
    yourNumbers.length
  }`, () => {
    expect(checkNumbers(yourNumbers, results).length).toBe(yourNumbers.length);
  });
  it('should return `[ Int, Boolean ]` for each number passed in', () => {
    const check = checkNumbers(yourNumbers, results);
    for (let i = 0; i < check.length; i++) {
      expect(typeof check[i][0]).toBe('number');
      expect(typeof check[i][1]).toBe('boolean');
    }
  });
  it('should return the correct results', () => {
    expect(checkNumbers(yourNumbers, results)).toStrictEqual(answer);
  });
});
