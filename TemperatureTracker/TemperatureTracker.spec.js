const { TempTracker } = require('./TemperatureTracker');

/* Some console.log tests */
const tracker = new TempTracker();
tracker.insert(32);

// console.log('mean: ', tracker.getMean()); // should print 32
// console.log('min: ', tracker.getMin()); // should print 32
// console.log('max: ', tracker.getMax()); // should print 32
// console.log('mode: ', tracker.getMode()); // should print 32

tracker.insert(135);

// console.log('mean: ', tracker.getMean()); // should print 83.5
// console.log('min: ', tracker.getMin()); // should print 32
// console.log('max: ', tracker.getMax()); // should print 135

tracker.insert(135);

// console.log('mean: ', tracker.getMean()); // should print 100.66666666666667
// console.log('min: ', tracker.getMin()); // should print 32
// console.log('max: ', tracker.getMax()); // should print 135
// console.log('mode: ', tracker.getMode()); // should print 135

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
