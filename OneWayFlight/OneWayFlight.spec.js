const { oneWayFlight, example } = require('./OnWayFlight');

describe('One Way Flight Test Suite', () => {
  it('should return an array', () => {
    const type = oneWayFlight([['null', 'NYC'], ['NYC', null]]);
    expect(Array.isArray(type)).toBe(true);
  });
  it('should return the array in the example', () => {
    const result = oneWayFlight(example);
    const answer = [
      'LAX',
      'SFO',
      'BHM',
      'FLG',
      'XNA',
      'CID',
      'SLC',
      'PIT',
      'ORD',
    ];
    expect(result.length).toBe(9);
    for (let i = 0; i < answer.length; i++) {
      expect(result[i]).toBe(answer[i]);
    }
  });
  it('should return correct numbers', () => {
    const result = oneWayFlight([
      [8, 9],
      [5, 6],
      [2, 3],
      [1, 2],
      [6, 7],
      [9, null],
      [null, 1],
      [3, 4],
      [7, 8],
      [4, 5],
    ]);
    for (let i = 0; i < result.length; i++) {
      expect(result[i]).toBe(i + 1);
    }
  });
});
