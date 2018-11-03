/*
  Write a class TempTracker that tracks the max, min, mean, and mode of temperature values as they are inserted into the tracker. This class should have the following methods:

  insert() - records a new temperature.
  getMax() - returns the highest temperature we've seen so far.
  getMin() - returns the lowest temperature we've seen so far.
  getMean() - returns the mean of all temperatures we've seen so far.
  getMode() - returns a mode of all temperatures we've seen so far.
  Favor speeding up the get methods over the insert method. Aim to get each of the get methods down to constant runtime.

  getMean() should return a float. The rest of the methods can return integers. Temperatures should be recorded in Fahrenheit, so we can assume a range of 0 to 140.

  If there is more than one mode, return any of the modes.

  Analyze the time and space complexity of the methods in your solution.
*/

export class TempTracker {
  // Code Here
  constructor() {
    this.tracker = Array(141).fill(0);
    // this.maxCount = 0
    this.mode = null;

    this.total = 0;
    this.count = 0;
    this.mean = null;

    this.min = null;
    this.max = null;
  }

  insert(temp) {
    this.tracker[temp]++;
    this.count++;
    this.total += temp;
    // this.maxCount = Math.max(this.maxCount, this.tracker[temp])

    this.min = this.min === null ? temp : Math.min(temp, this.min);
    this.max = Math.max(temp, this.max);
    this.mean = (this.total / this.count).toFixed(2);

    this.mode =
      this.mode === null
        ? temp
        : this.tracker[temp] > this.tracker[this.mode]
          ? temp
          : this.mode;
  }

  getMax() {
    return this.max;
  }
  getMin() {
    return this.min;
  }
  getMode() {
    return this.mode;
  }
  getMean() {
    return this.mean;
  }
}
