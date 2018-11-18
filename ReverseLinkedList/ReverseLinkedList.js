/*
  Write a function reverseLinkedList that receives a linked list node as input 
  and then reverses the list, starting from the given node. Do this in-place 
  without using any extra memory. Your function should return the value of the 
  new head of the list.

  Here is a simple Linked List class:

  JavaScript:

  

  Analyze the time and space complexity of your solution.
*/

const reverseLinkedList = node => {
  // Your code here

  // Recursive builds a new Linked List

  function buildReverse(head, next = null) {
    // console.log(head);
    // console.log(next);

    if (!head) {
      return next;
    }

    const newNode = new ListNode(head.value);
    newNode.next = next;
    return buildReverse(head.next, newNode);
  }

  const cache = buildReverse(node, null);
  return cache;

  // Iterative Mutates existing Linked List
  // Comment out lines 21 through 35 to run the code below

  let current = node;
  let nextNode = null;
  let prevNode = null;

  while (current) {
    nextNode = current.next;

    current.next = prevNode;

    prevNode = current;
    current = nextNode;
  }

  return prevNode;
};

// Do not modify code below this comment

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
const test2 = new ListNode(1);
test2.next = new ListNode(2);
test2.next.next = new ListNode(3);
reverseLinkedList(test2);
module.exports = { ListNode, reverseLinkedList };
