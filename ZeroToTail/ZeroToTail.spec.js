const zeroTail = require('./ZeroToTail').zeroTail;

describe('Zero To Tail Test Suite', () => {
  it('should return empty array if passed empty array', () => {
    const test = [];
    expect(zeroTail(test)).toBe(test);
  });
  it('should return the same array that it was passed, not a new array', () => {
    const test = [3, 4, 0, 1, 4, 3, 2];
    expect(zeroTail(test)).not.toBe([3, 4, 2, 1, 4, 3, 0]);
    expect(zeroTail(test)).toBe(test);
  });
  it('should have `0` at the last 4 indexes', () => {
    const test = zeroTail([0, 0, 0, 0, 1, 5, 2, 4, 8, 6]);
    expect(test[9]).toBe(0);
    expect(test[8]).toBe(0);
    expect(test[7]).toBe(0);
    expect(test[6]).toBe(0);
  });
});
