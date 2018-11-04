const { TempTracker } = require('./TemperatureTracker');

function one() {
  const track = new TempTracker();
  track.insert(32);
  return track;
}
function two() {
  const track = new TempTracker();
  track.insert(32);
  track.insert(135);
  return track;
}
function three() {
  const track = new TempTracker();
  track.insert(32);
  track.insert(135);
  track.insert(135);
  return track;
}

describe('Temperature Tracker Testing Suite', () => {
  it('should return a mean of 32', () => {
    const track = one();
    expect(track.getMean()).toBe(32);
  });
  it('should return a min of 32', () => {
    const track = one();
    expect(track.getMin()).toBe(32);
  });
  it('should return a max of 32', () => {
    const track = one();
    expect(track.getMax()).toBe(32);
  });
  it('should return a mode of 32', () => {
    const track = one();
    expect(track.getMode()).toBe(32);
  });

  it('should return a mean of 32', () => {
    const track = two();
    expect(track.getMean()).toBe(83.5);
  });
  it('should return a min of 32', () => {
    const track = two();
    expect(track.getMin()).toBe(32);
  });
  it('should return a max of 32', () => {
    const track = two();
    expect(track.getMax()).toBe(135);
  });
  it('should return a mode of 32', () => {
    const track = two();
    expect(track.getMode()).toBe(32);
  });

  it('should return a mean of 32', () => {
    const track = three();
    expect(track.getMean()).toBe(100.66666666666667);
  });
  it('should return a min of 32', () => {
    const track = three();
    expect(track.getMin()).toBe(32);
  });
  it('should return a max of 32', () => {
    const track = three();
    expect(track.getMax()).toBe(135);
  });
  it('should return a mode of 32', () => {
    const track = three();
    expect(track.getMode()).toBe(135);
  });
});
