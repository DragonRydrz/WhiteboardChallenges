const { isLinkedListPalindrome } = require('./LinkedListPalindrome');

class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const a = new ListNode(1);
const b = new ListNode(2);
const c = new ListNode(1);
const d = new ListNode(2);
const e = new ListNode(1);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

describe('Linked List Palindrome Testing Suite', () => {
  it('should return a boolean', () => {
    expect(typeof isLinkedListPalindrome(a)).toBe('boolean');
  });
  it('should return true', () => {
    expect(isLinkedListPalindrome(a)).toBeTruthy();
  });
  it('should return false', () => {
    expect(isLinkedListPalindrome(b)).toBeFalsy();
  });
  it('should return true', () => {
    expect(isLinkedListPalindrome(c)).toBeTruthy();
  });
});
