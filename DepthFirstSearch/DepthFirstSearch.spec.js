const {
  BinaryTreeNode,
  depthFirstForEach,
  recursiveSolution,
} = require('./DepthFirstSearch');
const sinon = require('sinon');

describe('Depth First Search Test Suite', () => {
  it('should create a binary tree', () => {
    const tree = new BinaryTreeNode(1);
    tree.insertLeft(2);
    tree.insertRight(3);
    expect(tree.value).toBe(1);
    expect(tree.left.value).toBe(2);
    expect(tree.right.value).toBe(3);
  });
  it('should output in the correct order -- iterative solution', () => {
    const top = new BinaryTreeNode(6);
    top.insertLeft(10).insertLeft(9);
    top.insertRight(18).insertRight(89);
    const spy = sinon.spy();
    depthFirstForEach(top, spy);
    expect(spy.args[0][0]).toBe(6);
    expect(spy.args[1][0]).toBe(10);
    expect(spy.args[2][0]).toBe(9);
    expect(spy.args[3][0]).toBe(18);
    expect(spy.args[4][0]).toBe(89);
  });
  it('should output in the correct order -- iterative solution', () => {
    const top = new BinaryTreeNode(6);
    top.insertLeft(10).insertLeft(9);
    top.left.insertRight(4);
    top.insertRight(18).insertRight(89);
    const spy = sinon.spy();
    depthFirstForEach(top, spy);
    expect(spy.args[0][0]).toBe(6);
    expect(spy.args[1][0]).toBe(10);
    expect(spy.args[2][0]).toBe(9);
    expect(spy.args[3][0]).toBe(4);
    expect(spy.args[4][0]).toBe(18);
    expect(spy.args[5][0]).toBe(89);
  });
  it('should output in the correct order -- iterative solution', () => {
    const top = new BinaryTreeNode(6);
    top.insertLeft(10).insertLeft(9);
    top.insertRight(18).insertRight(89);
    top.right.insertLeft(4);
    const spy = sinon.spy();
    depthFirstForEach(top, spy);
    expect(spy.args[0][0]).toBe(6);
    expect(spy.args[1][0]).toBe(10);
    expect(spy.args[2][0]).toBe(9);
    expect(spy.args[3][0]).toBe(18);
    expect(spy.args[4][0]).toBe(4);
    expect(spy.args[5][0]).toBe(89);
  });

  it('should output in the correct order -- recursive solution', () => {
    const top = new BinaryTreeNode(6);
    top.insertLeft(10).insertLeft(9);
    top.insertRight(18).insertRight(89);
    const spy = sinon.spy();
    recursiveSolution(top, spy);
    expect(spy.args[0][0]).toBe(6);
    expect(spy.args[1][0]).toBe(10);
    expect(spy.args[2][0]).toBe(9);
    expect(spy.args[3][0]).toBe(18);
    expect(spy.args[4][0]).toBe(89);
  });
  it('should output in the correct order -- recursive solution', () => {
    const top = new BinaryTreeNode(6);
    top.insertLeft(10).insertLeft(9);
    top.left.insertRight(4);
    top.insertRight(18).insertRight(89);
    const spy = sinon.spy();
    recursiveSolution(top, spy);
    expect(spy.args[0][0]).toBe(6);
    expect(spy.args[1][0]).toBe(10);
    expect(spy.args[2][0]).toBe(9);
    expect(spy.args[3][0]).toBe(4);
    expect(spy.args[4][0]).toBe(18);
    expect(spy.args[5][0]).toBe(89);
  });
  it('should output in the correct order -- recursive solution', () => {
    const top = new BinaryTreeNode(6);
    top.insertLeft(10).insertLeft(9);
    top.insertRight(18).insertRight(89);
    top.right.insertLeft(4);
    const spy = sinon.spy();
    recursiveSolution(top, spy);
    expect(spy.args[0][0]).toBe(6);
    expect(spy.args[1][0]).toBe(10);
    expect(spy.args[2][0]).toBe(9);
    expect(spy.args[3][0]).toBe(18);
    expect(spy.args[4][0]).toBe(4);
    expect(spy.args[5][0]).toBe(89);
  });
});
