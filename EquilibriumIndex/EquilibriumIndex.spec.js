const { equilibriumIndex } = require('./EquilibriumIndex');

const test1 = [[-1, 3, -4, 5, 1, -6, 2, 1], [1, 3, 7]];
const test2 = [[5, 1, 4, -9, -2, 4, 8, -3, 5, 6, 2, -1], []];

describe('Equilibrium Index Test Suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(equilibriumIndex([0]))).toBeTruthy();
  });
  it('should return `[1, 3, 7]`', () => {
    expect(equilibriumIndex(test1[0])).toStrictEqual(test1[1]);
  });
  it('should return `[1, 3, 7]`', () => {
    expect(equilibriumIndex(test2[0])).toStrictEqual(test2[1]);
  });
});
