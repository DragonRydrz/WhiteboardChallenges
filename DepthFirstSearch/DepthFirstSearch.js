/*

    Implement a function depthFirstForEach, once as a recursive function, and then again in an iterative fashion. Your functions should receive a callback and invoke that callback on each node as it is traversing in depth-first fashion. Your functions should also receive a tree node so that it can begin traversing.

    Here is an example tree class:

    class BinaryTreeNode {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }

      insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
      }

      insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
      }
    }
    For example, given a tree like the following

                      6
                    /   \
                  10     18
                /         \
                9           89
    and the following callback function

    const cb = (x) => console.log(x);
    your depthFirstForEach function should start at the root node and print out, in this order, 6, 10, 9, 18, 89.

    Analyze the time and space complexity of your recursive and iterative solutions.

*/

class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

const cb = x => console.log(x);

function depthFirstForEach(node, callback) {
  const q = [];
  while (node || q.length) {
    if (node) {
      callback(node.value);
      if (node.right) q.push(node.right);
      node = node.left ? node.left : q.length ? q.pop() : null;
    }
  }
  if (!node) return;
}

function recursiveSolution(node, callback) {
  // if (!node) return
  if (node.value) callback(node.value);
  if (node.left) recursiveSolution(node.left, callback);
  if (node.right) recursiveSolution(node.right, callback);
}

const top = new BinaryTreeNode(6);
top.insertLeft(10).insertLeft(9);
top.insertRight(18).insertRight(89);

// recursiveSolution(top, cb);
// depthFirstForEach(top, cb);

module.exports = {
  BinaryTreeNode,
  depthFirstForEach,
  recursiveSolution,
};
