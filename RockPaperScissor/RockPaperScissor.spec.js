const { rockPaperScissors } = require('./rockPaperScissor');

describe('Rock Paper Scissor testing suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(rockPaperScissors(1))).toBeTruthy();
  });
});
