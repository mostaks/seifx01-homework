let letters = ['D', 'E', 'V'];
let insertedLetter = [];
let allGuessedLetters = [];
let bodyParts = 6;

function guessLetters(guessLetter) {
  for(let i=0; i<letters.length; i++) {
   if (allGuessedLetters.includes(guessLetter)) {
     allGuessedLetters.push(guessLetter);
     break;
   }
   if (letters.includes(guessLetter)) {
    insertedLetter.push(guessLetter);
    console.log(`Congratulations!! You found the letter "${guessLetter}" =D`);
    console.log(`You still have ${bodyParts} body parts`);
  } else {
    bodyParts --;
    console.log(`You still have ${bodyParts} body parts`);
    console.log('Try Again');
    break;
    } if (insertedLetter.length == letters.length) {
    console.log(`Congratulations!! You found the word! It is "DEV!"`);
    console.log(`You still have ${bodyParts} body parts`);
    }   
    break;
  } 
};
    
    guessLetters('A');
    console.log(insertedLetter);
    console.log(allGuessedLetters);