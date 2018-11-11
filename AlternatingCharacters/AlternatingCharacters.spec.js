const { alternatingCharacters } = require('./AlternatingCharacters');

const tests = [['ABABABA', 0], ['AAA', 2], ['AAABBBA', 4]];

describe('Alternating Characters Testing Suite', () => {
  it('should return a number', () => {
    expect(typeof alternatingCharacters('ABABABA')).toBe('number');
  });
  for (let i = 0; i < tests.length; i++) {
    it(`should return ${tests[i][1]}`, () => {
      expect(alternatingCharacters(tests[i][0])).toBe(tests[i][1]);
    });
  }
});
