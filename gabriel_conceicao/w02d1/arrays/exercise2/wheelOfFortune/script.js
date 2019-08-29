
let letters = ['D', 'E', 'V'];
let insertedLetter = [];
let reward = 0;

function guessLetters(guessLetter) {
  for(let i=0; i<letters.length; i++) {
   if (letters.includes(guessLetter)) {
    insertedLetter.push(guessLetter);
    reward += 100; 
    console.log(`Congratulations!! You found the letter "${guessLetter}" =D`);
    console.log(`Your new balance is "${reward} dollars"`);
  } else {
    reward -= 50;
    console.log(`Wrong letter - Your new balance is "${reward} dollars"`);
    console.log('Try Again');
    break;
    } if (insertedLetter.length == letters.length) {
    console.log(`Congratulations!! You found the word! It is "DEV!"`);
    }   
    break;
  } 
};
    
    guessLetters('A');
    console.log(insertedLetter);

