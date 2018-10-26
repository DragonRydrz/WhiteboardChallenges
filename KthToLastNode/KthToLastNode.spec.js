const { kthToLastNode } = require('./KthToLastNode');

let a, b, c, d, e;

describe('Kth To Last Node Testing Suite', () => {
  beforeAll(() => {
    class ListNode {
      constructor(value) {
        this.value = value;
        this.next = null;
      }
    }

    a = new ListNode('Australian Sheperd');
    b = new ListNode('Beagle');
    c = new ListNode('Cairne Terrier');
    d = new ListNode('Dobermann');
    e = new ListNode('English Mastiff');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
  });
  it('should return `Dobermann`', () => {
    expect(kthToLastNode(2, a)).toBe('Dobermann');
  });
  it('should return `Australian Sheperd`', () => {
    expect(kthToLastNode(5, a)).toBe('Australian Sheperd');
  });
  it('should return `Cairne Terrier`', () => {
    expect(kthToLastNode(3, c)).toBe('Cairne Terrier');
  });
  // it('should throw an error', () => {
  //   expect(kthToLastNode(0, a)).toThrowError();
  // });
});
