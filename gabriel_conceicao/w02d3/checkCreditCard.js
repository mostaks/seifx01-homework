'use strict';


/**
 * Rules:
 * 1. Number must be 16 digits, all numbers
 * 2. all digits cannot be the same
 * 3. last digit must be even
 * 4. sum of all digits must be greater than 16
 * 
 * Bonus: indicate what the error is
 * Double bonus:
 *  - What are the rules
 *  - What are some numbers that pass/fail
 *  - Ideas:
 *    - Check expiration date!
 *    - Check out the Luhn Algorithm for inspiration
 */

const sameDigitError = "Error: All digits are the same.";
const notEnoughDigits = "Error: Not enough digits."
const notNumbersError = "Error: Some characters are non-numerical.";
const lastDigitOddError = "Error: Last digit is odd.";
const digitSumError = "Error: Sum of all digits is not greater than 16."
const ValidCreditCard = "Credit card number is valid."

function checkCreditCardNumber(creditCardNumber) {
  let justNumbers = '';  

  justNumbers = creditCardNumber.slice(0, 4);
  justNumbers += creditCardNumber.slice(5, 9);
  justNumbers += creditCardNumber.slice(10, 14);
  justNumbers += creditCardNumber.slice(15);

  
  if (checkAllNumbers(justNumbers)
      && checkDigitLength(justNumbers)
      && checkDigitSumIsGreaterThanSixteen(justNumbers)
      && checkLastDigitIsEven(justNumbers)
      && checkAllNumberTheSame(justNumbers)) {
        console.log(ValidCreditCard)
        return true;
      }
}

function checkAllNumberTheSame (item) {
  let firstDigit = item[0];

  for (let i = 1; i < item.length; i++) {
    if (item[i] !== firstDigit) {
      return true;
    } else {
      console.log(sameDigitError);
      return false;
    }
  }
}

function checkAllNumbers(item) {
  for (let i = 0; i < item.length; i++) {
    if (!Number(item[i])) {
      console.log(notNumbersError);
      return false;
    }
    return true;
  }
}

function checkDigitLength(item) {
  if (item.length !== 16) {
    console.log(notEnoughDigits);
    return false;
  }
  return true;
}

function checkLastDigitIsEven(item) {
  if (item[item.length - 1] % 2 !== 0) {
    console.log(lastDigitOddError);
    return false;
  }
  return true;
}

function checkDigitSumIsGreaterThanSixteen(item) {
  let sum = 0;

  for (let i = 0; i < item.length; i++) {
    sum += Number(item[i]);
  }

  if (sum <= 16) {
    console.log(digitSumError);
    return false;
  }

  return true;
}

const badSample = "6666-6666-6666-6661";
const goodSample = "1234-1234-1234-1234";
checkCreditCardNumber("6666-6666-6666-3456); // good sample
checkCreditCardNumber("1010-1010-1010-1212"); // bad sample
checkCreditCardNumber("1234-5678-1234-");
checkCreditCardNumber(badSample);
checkCreditCardNumber(badSample);
checkCreditCardNumber(badSample);
