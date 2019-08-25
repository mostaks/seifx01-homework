'use strict';

function maxOfTwoNumbers(num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

function maxOfThree(num1, num2, num3) {
  return Math.max(num1, num2, num3);
};

function sumArray(array) {
  let accumulator = 0

  for (let i of array) {
    accumulator += i;
  }

  return accumulator;
};

let arrayOfNumbers = [
  1,
  2,
  3,
  4,
  5,
]

/**
 * Bonus
 */

/**
 * 
 * @param {String} inputString - the input string.
 */
 function reverseString (inputString) {
   let accumulator = '';

   for (let i = inputString.length - 1; i >= 0; i--) {
     accumulator += inputString[i];
   }

   return accumulator;
 }

let string = 'lalala';
console.log(`'${string}' reversed is '${reverseString(string)}'`);

function findLongestWord(arrayOfWords) {
  let lengthOfLongest = 0;

  for (let i in arrayOfWords) {
    if (arrayOfWords[i].length > lengthOfLongest) {
      lengthOfLongest = arrayOfWords[i].length;
    }
  }

  return lengthOfLongest;
}

let testArray = [
  'lala',
  'lalala',
  'lalalala',
  'poo',
];

console.log(`longest word is: ${findLongestWord(testArray)} characters long.`)

function filterLongWords(arrayOfWords, i) {
  let accumulator = [];

  for (let i in arrayOfWords) {
    if (arrayOfWords[i].length > i) {
      accumulator.push(arrayOfWords[i]);
    }
    return accumulator;
  }
}


console.log(filterLongWords(testArray, 4));