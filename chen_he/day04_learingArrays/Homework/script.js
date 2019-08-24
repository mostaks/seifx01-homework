//Array and Functions Bonus Material
function maxOfTwoNumbers (num1, num2) {
    if(num1 >= num2) {
      console.log(num1);
    } else
    console.log(num2);
}
maxOfTwoNumbers(1,2);

console.log(`------`);
let arrMax = [3, 4, 5, 8, 1, 0];
arrMax = function(arr) {

  return Math.max(...arr);
}

function maxOfThree (num1, num2, num3) {
  for(i = 0; i < maxOfThree.length; i++) {
    if(maxOfThree[i] > maxOfThree[i+1]) {
      console.log(maxOfThree[i]);
    } else console.log(maxOfThree[i+1]);
  }
}
maxOfThree(2,5,3);

console.log(`------`);

let vowel = ['a', 'e', 'i', 'o', 'u'];
function checkVowel (letter) {
for(let i = 0; i < vowel.length; i++) {
      if( vowel[i] === letter)
      return true;
    }
    return false;
};
checkVowel('a');
console.log(`------`);

let nums = [1, 2, 3, 4, 5, 6, 7];




function sumArray() {
  console.log(nums.reduce((a, b) => a + b));
}
sumArray();

function multiplyArray() {
  console.log(nums.reduce((a, b) => a * b));
}
multiplyArray();



console.log(`------`);



let reverseArray = ['j', 'a', 'g', 't', 'e', 's', 't', 'e','r']
reverseArray.reverse().forEach(function(value) {
  console.log(value);
});


console.log(`------`);

//Homework: The Word Guesser
const lettersOfTheWord = ['F', 'O', 'X'];
const currentGuessedLetters = ['_F', '_O', '_X'];

function guessLetter (theGuessedLetter) {
  for(let i = 0; i < lettersOfTheWord.length; i++) {
      if( lettersOfTheWord[i] === theGuessedLetter)
      console.log('true');
    }
    return false;
};
guessLetter('F');