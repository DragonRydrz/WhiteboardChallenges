function binaryTreeValidation(root) {
  // Your code here
  const nodeAndBoundsStack = [];
  nodeAndBoundsStack.push({node: root, lowerBound: -Infinity, upperBound: Infinity});

  // depth-first traversal
  while (nodeAndBoundsStack.length) {
    const nodeAndBounds = nodeAndBoundsStack.pop();
    const node = nodeAndBounds.node;
    const lowerBound = nodeAndBounds.lowerBound;
    const upperBound = nodeAndBounds.upperBound;

    // if this node is invalid, we return false right away
    if (node.value <= lowerBound || node.value >= upperBound) {
        return false;
    }

    if (node.left) {
      // this node must be less than the current node
      nodeAndBoundsStack.push({node: node.left, lowerBound: lowerBound, upperBound: node.value});

    }
    if (node.right) {
      // this node must be greater than the current node
      nodeAndBoundsStack.push({node: node.right, lowerBound: node.value, upperBound: upperBound});
    }
  }

  return true;
}

// Do not modify code below this comment
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
module.exports = { binaryTreeValidation, BinaryTreeNode };
