const { canBePalindrome } = require('./CanBePalindrome');

describe('Can Be Palindrome Testing Suite', () => {
  it('should return true or false', () => {
    expect(typeof canBePalindrome('test')).toBe('boolean');
  });
});
