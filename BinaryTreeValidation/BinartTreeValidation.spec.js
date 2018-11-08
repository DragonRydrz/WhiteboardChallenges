const { binaryTreeValidation } = require('./BinaryTreeValidation');

describe('Binary Tree Validation Testing Suite', () => {
  it('should return a boolean', () => {
    expect(
      typeof binaryTreeValidation({ value: 20, left: null, right: null })
    ).toBe('boolean');
  });
});
