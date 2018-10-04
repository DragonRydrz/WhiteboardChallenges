const { bubble, selection, insertion, quick } = require('./Sorting');
let test1 = [4, 5, 3, 6, 2, 7, 1, 9, 8, 0];
let ans1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

let test2 = [1, 5, 3, 2, 4, 7, 6, 3, 2, 9, 8];
let ans2 = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];

describe('Sorting Test Suite', () => {
  beforeEach(() => {
    test1 = [4, 5, 3, 6, 2, 7, 1, 9, 8, 0];
    ans1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

    test2 = [1, 5, 3, 2, 4, 7, 6, 3, 2, 9, 8];
    ans2 = [1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9];
  });
  describe('bubble sort', () => {
    it('should return an array', () => {
      expect(Array.isArray(bubble([3, 4, 1]))).toBe(true);
    });
    it('should return the same array it was given', () => {
      expect(bubble(test1)).toBe(test1);
    });
    it('should sort least to greatest', () => {
      expect(JSON.stringify(bubble(test1))).toBe(JSON.stringify(ans1));
      expect(JSON.stringify(bubble(test2))).toBe(JSON.stringify(ans2));
    });
  });
  describe('selection sort', () => {
    it('should return an array', () => {
      expect(Array.isArray(selection([3, 4, 1]))).toBe(true);
    });
    it('should return the same array it was given', () => {
      expect(selection(test1)).toBe(test1);
    });
    it('should sort least to greatest', () => {
      expect(JSON.stringify(selection(test1))).toBe(JSON.stringify(ans1));
      expect(JSON.stringify(selection(test2))).toBe(JSON.stringify(ans2));
    });
  });
  describe('insertion sort', () => {
    it('should return an array', () => {
      expect(Array.isArray(insertion([3, 4, 1]))).toBe(true);
    });
    it('should return the same array it was given', () => {
      expect(insertion(test1)).toBe(test1);
    });
    it('should sort least to greatest', () => {
      expect(JSON.stringify(insertion(test1))).toBe(JSON.stringify(ans1));
      expect(JSON.stringify(insertion(test2))).toBe(JSON.stringify(ans2));
    });
  });
  describe('quick sort', () => {
    it('should return an array', () => {
      expect(Array.isArray(quick([3, 4, 1]))).toBe(true);
    });
    it('should sort least to greatest', () => {
      expect(JSON.stringify(quick(test1))).toBe(JSON.stringify(ans1));
      expect(JSON.stringify(quick(test2))).toBe(JSON.stringify(ans2));
    });
  });
});
