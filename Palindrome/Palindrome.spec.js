const { palindrome } = require('./Palindrome');

describe('Palindrome testing suite', () => {
  it('should return a boolean', () => {
    expect(typeof palindrome('dog')).toBe('boolean');
  });
  it('should return true', () => {
    expect(palindrome('tacocat')).toBe(true);
  });
  it('should return false', () => {
    expect(palindrome('taco cat')).toBe(true);
  });
  it('should return false', () => {
    expect(palindrome('this is not a palindrome')).toBeFalsy();
  });
});
