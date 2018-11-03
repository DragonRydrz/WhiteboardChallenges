const { mergingTwoPackages } = require('./MergingTwoPackages');

describe('Merging Two Packages Testing Suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(mergingTwoPackages([], 12))).toBeTruthy();
  });
  it('should return `[]`', () => {
    expect(mergingTwoPackages([1, 3, 5, 7, 9], 11)).toMatchObject([]);
  });
  it('should return `[ 3, 1 ]`', () => {
    expect(mergingTwoPackages([2, 4, 2, 8, 6, 1], 12)).toMatchObject([3, 1]);
  });
  it('should return `[ 3, 0 ]`', () => {
    expect(mergingTwoPackages([0, 2, 3, 1, 4, 6, 12, 54], 1));
  });
});
