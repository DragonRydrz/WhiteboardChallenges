const { oneWayFlight } = require('./OnWayFlight');

describe('One Way Flight Test Suite', () => {
  it('should return an array', () => {
    const type = oneWayFlight([['null', 'NYC'], ['NYC', null]]);
    expect(Array.isArray(type)).toBe(true);
  });
});
