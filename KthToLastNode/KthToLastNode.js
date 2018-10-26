/* 
  # Kth to Last Node in a Singly-Linked List

  Given a pointer to the head element of a linked list, write a function that also takes an integer parameter `k` and returns the kth to last node of the list.
  
  For example:
  ```js
  class ListNode {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }

  let a = new ListNode("Australian Sheperd");
  let b = new ListNode("Beagle");
  let c = new ListNode("Cairne Terrier");
  let d = new ListNode("Dobermann");
  let e = new ListNode("English Mastiff");

  a.next = b;
  b.next = c;
  c.next = d;
  d.next = e;

  kthToLastNode(2, a);  // returns the node with value "Dobermann" (the 2nd to last node)
  ```
*/

const kthToLastNode = (k, head) => {
  if (k < 1) {
    throw new Error('Impossible to find less than first to last node: ' + k);
  }

  let leftNode = head;
  let rightNode = head;

  // move rightNode to the kth node
  for (var i = 0; i < k - 1; i++) {
    // but along the way, if a rightNode doesn't have a next,
    // then k is greater than the length of the list and there
    // can't be a kth-to-last node! we'll raise an error
    if (!rightNode.next) {
      throw new Error('k is larger than the length of the linked list: ', k);
    }

    rightNode = rightNode.next;
  }

  // starting with leftNode on the head,
  // move leftNode and rightNode down the list,
  // maintaining a distance of k between them,
  // until rightNode hits the end of the list
  while (rightNode.next) {
    leftNode = leftNode.next;
    rightNode = rightNode.next;
  }

  // since leftNode is k nodes behind rightNode,
  // leftNode is now the kth to last node!
  return leftNode.value;
};

module.exports = { kthToLastNode };
