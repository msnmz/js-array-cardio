const expect = require('chai').expect;
const sinon = require('sinon');

const session1 = require('./session-1');

describe('Session 1', () => {
  describe('reverseString', () => {
    it('should reverse a string', () => {
      expect(session1.reverseString('Hello!')).to.be.equal('!olleH');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindromic string', () => {
      expect(session1.isPalindrome('racecar')).to.be.true;
    });

    it('should return false for non-palindromic string', () => {
      expect(session1.isPalindrome('racecar!')).to.be.false;
    });
  });

  describe('reverseInt', () => {
    it('should reverse an integer', () => {
      expect(session1.reverseInt(521)).to.be.equal(125);
    });
  });

  describe('capitalizeLetters', () => {
    it('should change first letters to uppercase letters', () => {
      expect(session1.capitalizeLetters('i love javascript')).to.be.equal('I Love Javascript');
    });
  });

  describe('maxCharacter', () => {
    it('should return the character that is most common in a string', () => {
      expect(session1.maxCharacter('javascript')).to.be.equal('a');
    });
  });

  describe('fizzBuzz', () => {
    let logStub;

    beforeEach(() => {
      // "spy" on console.log with stub and preventing the default logging behavior
      logStub = sinon.stub(console, 'log');
    });

    afterEach(() => {
      // restore console.log
      logStub.restore();
    });

    it('should log "Fizz" for multiplies of 3', () => {
      session1.fizzBuzz();
      expect(logStub.getCall(2).args).to.be.deep.equal(['Fizz']);
      expect(logStub.getCall(5).args).to.be.deep.equal(['Fizz']);
      expect(logStub.getCall(8).args).to.be.deep.equal(['Fizz']);
      expect(logStub.getCall(11).args).to.be.deep.equal(['Fizz']);
    });
    it('should log "Buzz" for multiplies of 5', () => {
      session1.fizzBuzz();
      expect(logStub.getCall(4).args).to.be.deep.equal(['Buzz']);
      expect(logStub.getCall(9).args).to.be.deep.equal(['Buzz']);
      expect(logStub.getCall(19).args).to.be.deep.equal(['Buzz']);
      expect(logStub.getCall(99).args).to.be.deep.equal(['Buzz']);
    });
    it('should log "FizzBuzz" for multiplies of 15', () => {
      session1.fizzBuzz();
      expect(logStub.getCall(14).calledWith('FizzBuzz')).to.be.true;
      expect(logStub.getCall(29).calledWith('FizzBuzz')).to.be.true;
      expect(logStub.getCall(59).calledWith('FizzBuzz')).to.be.true;
      expect(logStub.getCall(89).calledWith('FizzBuzz')).to.be.true;
    });
    it('should log number if not multiply of 3 and 5', () => {
      session1.fizzBuzz();
      expect(logStub.getCall(0).calledWith(1)).to.be.true;
      expect(logStub.getCall(6).calledWith(7)).to.be.true;
      expect(logStub.getCall(93).calledWith(94)).to.be.true;
      expect(logStub.getCall(97).calledWith(98)).to.be.true;
    });
  });
});