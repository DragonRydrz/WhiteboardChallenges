const { balancedBrackets } = require('./BalancedBrackets');

describe('Balanced Brackets Test Suite', () => {
  it('should return false', () => {
    const results = balancedBrackets('({[({[]}()]})');
    expect(results).toBe(false);
  });
  it('should return false', () => {
    const results = balancedBrackets('[]{}()');
    expect(results).toBe(true);
  });
  it('should return false', () => {
    const results = balancedBrackets('[{[()]}]');
    expect(results).toBe(true);
  });
  it('should return false', () => {
    const results = balancedBrackets('[({}}]');
    expect(results).toBe(false);
  });
});
