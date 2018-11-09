const {
  binaryTreeValidation,
  BinaryTreeNode,
} = require('./BinaryTreeValidation');

const head = new BinaryTreeNode(50);
head.insertLeft(30).insertLeft(20);
head.left.insertRight(60);
head.insertRight(80).insertLeft(70);
head.right.insertRight(90);

describe('Binary Tree Validation Testing Suite', () => {
  it('should return a boolean', () => {
    expect(
      typeof binaryTreeValidation({ value: 20, left: null, right: null })
    ).toBe('boolean');
  });
  it('should return false', () => {
    expect(binaryTreeValidation(head)).toBe(false);
  });
  it('should return true', () => {
    expect(binaryTreeValidation(head.left)).toBe(true);
  });
  it('should return true', () => {
    expect(binaryTreeValidation(head.right)).toBe(true);
  });
});
