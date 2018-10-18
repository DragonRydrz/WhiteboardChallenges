const { productOfAllOtherNumbers } = require('./ProductOfAllOtherNumbers');

describe('ProductOfAllOtherNumbers testing suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(productOfAllOtherNumbers([1, 7, 3, 4]))).toBeTruthy();
  });
  it('output arry length should match input array length', () => {
    expect(productOfAllOtherNumbers([1, 7, 3, 4])).toHaveLength(4);
  });
  it('should return [84, 12, 28, 21]', () => {
    expect(productOfAllOtherNumbers([1, 7, 3, 4])).toMatchObject([
      84,
      12,
      28,
      21,
    ]);
  });
});
