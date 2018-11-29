/*
  Build out a LinkedList class and a Node class.
  Functions to impliment are listed in the template.
  Complete code so all methods function as expected.
*/

class LinkedList {
  constructor(value) {
    // Head property required
    // Your code here
    this.head = new Node(value);
    this.addToHead = this.addToHead.bind(this);
    this.addToTail = this.addToTail.bind(this);
    this.removeFromHead = this.removeFromHead.bind(this);
    this.removeFromTail = this.removeFromTail.bind(this);
    this.lengthOf = this.lengthOf.bind(this);
  }

  addToHead(value) {
    // Add new Node to the head
    // Your code here
    if (!this.head) {
      this.head = new Node(value, this.head);
      return;
    }
    const newNode = new Node(value, this.head);
    this.head = newNode;
  }

  addToTail(value) {
    // Add new Node to the tail
    // Your code here
    const newNode = new Node(value);
    if (!this.head) {
      this.addToHead(value);
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  removeFromHead() {
    // Remove the node from the head
    // Your code here
    if (!this.head) return;
    const cache = this.head;
    this.head = this.head.next;
    return cache;
  }

  removeFromTail() {
    // Remove the node from the tail
    // Your code here
    if (!this.head.next) this.removeFromHead();
    let current = this.head;
    while (current.next.next) {
      current = current.next;
    }
    const cache = current.next;
    current.next = null;
    return cache;
  }

  lengthOf() {
    // Return the total number of nodes in the linked list
    // Your Code Here
    let counter = 0;
    let current = this.head;
    while (current) {
      counter++;
      current = current.next;
    }
    return counter;
  }
}

class Node {
  constructor(value, next = null) {
    // Value and Next properties required
    // Your code here
    this.value = value;
    this.next = next;
  }
}

// Do not modify code below this comment
module.exports = { LinkedList, Node };
