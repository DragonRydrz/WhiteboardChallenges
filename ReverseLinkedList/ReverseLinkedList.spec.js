const { ListNode, reverseLinkedList } = require('./ReverseLinkedList');

describe('Reverse Linked List Testing Suite', () => {
  it('should have a value and next property (ListNode)', () => {
    const test1 = new ListNode(5);
    expect(reverseLinkedList(test1)).toHaveProperty('value');
    expect(reverseLinkedList(test1)).toHaveProperty('next');
  });
  it('should reverse a linked list', () => {
    const test2 = new ListNode(1);
    test2.next = new ListNode(2);
    test2.next.next = new ListNode(3);
    const test2reversed = new ListNode(3);
    test2reversed.next = new ListNode(2);
    test2reversed.next.next = new ListNode(1);
    expect(reverseLinkedList(test2)).toEqual(test2reversed);
  });
});
