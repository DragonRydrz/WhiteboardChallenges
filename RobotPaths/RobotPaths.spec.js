const { pathCount } = require('./RobotPaths');

describe('Robot Paths Test Suite', () => {
  it('should return 2', () => {
    expect(pathCount(2)).toBe(2);
  });
  it('should return 184', () => {
    expect(pathCount(4)).toBe(184);
  });
  it('should return 1262816', () => {
    expect(pathCount(6)).toBe(1262816);
  });
});
