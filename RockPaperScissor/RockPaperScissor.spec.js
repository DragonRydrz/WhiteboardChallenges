const rockPaperScissor = require('./RockPaperScissor');

describe('Rock Paper Scissor testing suite', () => {
  it('should return an array', () => {
    expect(Array.isArray(rockPaperScissor(1))).toBeTruthy();
  });
});
