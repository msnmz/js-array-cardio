const expect = require('chai').expect;

const session3 = require('./session-3');

describe('Session 3', () => {
  describe('addAll', () => {
    it('should return a sum of all parameters entered regardless of the amount of numbers', () => {
      expect(session3.addAll(2, 5, 6, 7)).to.be.equal(20);
    });
  });

  describe('sumAllPrimes', () => {
    it('should return a sum of all prime numbers up to a number', () => {
      expect(session3.sumAllPrimes(10)).to.be.equal(17);
    });
  });

  describe('seekAndDestroy', () => {
    it('should remove from the array whatever is in the following arguments', () => {
      expect(session3.seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)).to.be.deep.equal([3, 4, 'hello']);
    });
  });

  describe('sortByHeight', () => {
    it('should sort the heights without moving the trees', () => {
      expect(session3.sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).to.be.deep.equal([-1, 150, 160, 170, -1, -1, 180, 190]);
    });
  });

  describe('missingLetters', () => {
    it('should return the missing letter within the string if there is one', () => {
      expect(session3.missingLetters('abcdefghjklmno')).to.be.equal('i');
    });
    it('should return undefined if all of the letters are in order', () => {
      expect(session3.missingLetters('abcdefghijklmnopqrstuvwxyz')).to.be.equal(undefined);
    });
  });

  describe('evenOddSums', () => {
    it('should return an array of the sums of even and odd numbers', () => {
      expect(session3.evenOddSums([50, 60, 60, 45, 71])).to.be.deep.equal([170, 116]);
    });
  });
});