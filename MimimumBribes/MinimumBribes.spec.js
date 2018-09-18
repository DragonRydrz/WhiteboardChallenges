const { minimumBribes } = require('./MinimumBribes');

describe('Minimum Bribes Test Suite', () => {
  it('should return `Too chaotic`', () => {
    const result = minimumBribes([5, 1, 4, 6, 2, 3]);
    expect(result).toBe('Too chaotic');
  });
  it('should return 7', () => {
    const result = minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
    expect(result).toBe(7);
  });
  it('should return 3', () => {
    const result = minimumBribes([2, 1, 5, 3, 4]);
    expect(result).toBe(3);
  });
});
