const countVotes = require('./CountingVotes').countVotes;

describe('Counting Votes Test Suite', () => {
  it('should return winner -- no tie', () => {
    expect(countVotes(['michael', 'george', 'michael'])).toBe('michael');
  });
  it('should return winner -- tie', () => {
    expect(countVotes([1, 1, 2, 2])).toBe(2);
  });
  it('should return winner -- 4 way tie', () => {
    expect(countVotes(['a', 'r', 'b', 'z', 'z', 'a', 'r', 'b'])).toBe('z');
  });
});
