const expect = require('chai').expect;

const session2 = require('./session-2');

describe('Session 2', () => {
  describe('longestWord', () => {
    it('should return longest words within array if there are multiple ones with the same length', () => {
      expect(session2.longestWord('Hello there whats up')).to.be.deep.equal(['Hello', 'there', 'whats']);
    })
    it('should return a string if there is one longest word', () => {
      expect(session2.longestWord('Hello! there from javascript, what\'s up')).to.be.equal('javascript');
    })
  });

  describe('chunkArray', () => {
    it('should split the array into chunked arrays of a specific length of 3', () => {
      expect(session2.chunkArray([1, 2, 3, 4, 5, 6, 7], 3)).to.be.deep.equal([[1, 2, 3], [4, 5, 6], [7]]);
    })
    it('should split the array into chunked arrays of a specific length of 2', () => {
      expect(session2.chunkArray([1, 2, 3, 4, 5, 6, 7], 2)).to.be.deep.equal([[1, 2], [3, 4], [5, 6], [7]]);
    })
  })

  describe('flattenArray', () => {
    it('should take an array of arrays and flatten to a single array', () => {
      expect(session2.flattenArray([[1, 2], [3, 4], [5, 6], [7]])).to.be.deep.equal([1, 2, 3, 4, 5, 6, 7]);
    })
  })

  describe('isAnagram', () => {
    it('should return true if the arguments are anagram', () => {
      expect(session2.isAnagram('elbow', 'below')).to.be.true;
    })
    it('should return false if the arguments are not anagram', () => {
      expect(session2.isAnagram('elbowe', 'below')).to.be.false;
    })
  })

  describe('letterChanges', () => {
    it('should change every letter of the string to the one that follows it and capitalize the vowels', () => {
      expect(session2.letterChanges('hello there')).to.be.equal('Ifmmp UIfsf');
    })
    it('should turn Z to A', () => {
      expect(session2.letterChanges('zion')).to.be.equal('AjpO');
    })
  })
});