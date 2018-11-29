const { LinkedList } = require('./LinkedListClass');

let list;

describe('Linked List Class Testing Suite', () => {
  beforeAll(() => {
    list = new LinkedList(4);
  });
  test('should be an instance of `LinkedList', () => {
    expect(list instanceof LinkedList).toBe(true);
  });
  test('should be 4', () => {
    console.log(list);
    expect(list.head.value).toBe(4);
  });
  it('should add a new node to the head of the list', () => {
    list.addToHead(1);
    expect(list.head.value).toBe(1);
  });
  it('should add 10 as the tail node', () => {
    list.addToTail(10);
    expect(getLastValue(list.head)).toBe(10);
  });
  it('should return a length of 3', () => {
    expect(list.lengthOf()).toBe(3);
  });
  it('should remove the head of the list', () => {
    list.removeFromHead();
    expect(list.head.value).toBe(4);
  });
  it('should remove the tail node', () => {
    list.addToHead(3);
    list.addToHead(2);
    list.addToHead(1);
    list.removeFromTail();
    expect(getLastValue(list.head)).toBe(4);
  });
});

function getLastValue(node) {
  let value;
  let current = list.head;
  while (current) {
    value = current.value;
    current = current.next;
  }
  return value;
}
