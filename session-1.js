// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  return str.split('').reverse().join('');
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  return str === reverseString(str);
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(num) {
  return +reverseString('' + num);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  return str.split(' ').map(w => w[0].toUpperCase() + w.substr(1)).join(' ');
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  const characters = {};
  str.split('').forEach(ch => characters[ch] ? characters[ch]++ : characters[ch] = 1);
  const sortedCharacters = Object.entries(characters).sort(([prevCh, prevVal], [nextCh, nextVal]) => nextVal - prevVal);
  return sortedCharacters[0][0];
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i % 3 === 0) {
      output += 'Fizz';
    }
    if (i % 5 === 0) {
      output += 'Buzz';
    }
    console.log(output || i);
  }
}

module.exports = {
  reverseString,
  isPalindrome,
  reverseInt,
  capitalizeLetters,
  maxCharacter,
  fizzBuzz
}

