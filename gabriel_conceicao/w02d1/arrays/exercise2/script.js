
function maxOfTwoNumbers (num1, num2){
  console.log(Math.max(num1, num2));
};

maxOfTwoNumbers(2, 4);

function maxOfThree (num1, num2, num3){
  console.log(Math.max(num1, num2, num3));
};

maxOfThree(2, 6, 4);

function character (entry) {
  if (entry === ('a' || 'e' || 'i' || 'o' || 'u')) {
    return true;
  }
  else {
    return false;
  }
};

character('a');

function sumArray(num) {
  var sum = num.reduce(function(a, b) { return a + b; }, 0);
  console.log(sum);
  };

sumArray([1,2,3,4]);

function multiplyArray(num2) {
  var multi = num2.reduce(function(a, b) { return a * b; });
  console.log(multi);
  };

multiplyArray([1,2,3,4]);

function reverseString(str) {
    return str.split("").reverse().join("");
    console.log(str);
}
reverseString("jag testar");

let letters = ['D', 'E', 'V'];
let insertedLetter = [];

function guessLetters(guessLetter) {
  for(let i=0; i<letters.length; i++) {
   if (letters.includes(guessLetter)) {
    insertedLetter.push(guessLetter);
    console.log(`Congratulations!! You found the letter "${guessLetter}" =D`);
  } else {
    console.log('Try Again');
    break;
    } if (insertedLetter.length == letters.length) {
    console.log(`Congratulations!! You found the word! It is "DEV!"`);
    }   
    break;
  } 
};
    
    guessLetters('E');
    console.log(insertedLetter);
