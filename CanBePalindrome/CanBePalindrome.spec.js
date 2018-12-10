const { canBePalindrome } = require('./CanBePalindrome');

describe('Can Be Palindrome Testing Suite', () => {
  it('should return true or false', () => {
    expect(typeof canBePalindrome('test')).toBe('boolean');
  });
  it('should return true', () => {
    expect(canBePalindrome('aaabbeedd')).toBe(true);
  });
  it('should return true', () => {
    expect(canBePalindrome('aaabbb')).toBe(false);
  });
});
