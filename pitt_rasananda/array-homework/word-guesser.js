let secretWord = ['P','E','P','P','E','R'];
let guessedLetters = ['_','_','_','_','_','_'];
let reward = 0;
let letterCount = 0;
let hangmanCount = 6;
let usedCharacter = [];

function guessLetter(letter) {
  if (checkUsedCharacter(letter)) {
    return;
  }
  
  for(i=0; i<secretWord.length;i++) {
    if (letter === secretWord[i]) {
      guessedLetters.splice(i,1,letter);
      letterCount ++;
    } 
  }

// if letter isn't in the secret word, add hangman count
// if letter is in secret word, congratulate and add reward.
  if (letterCount === 0) {
    console.log(`Sorry, this word doesn't contain letter ${letter}.`);
    console.log(`You have ${hangmanCount-1} more tries.`);
    hangmanCount --;
    } else if (letterCount >= 1) {
      console.log(`Congratulation! You've found the new letter!!!`)
      console.log(guessedLetters);
      reward += Math.floor(Math.random() * 100 * letterCount); 
      console.log(`You've earn $ ${reward} for guessing correctly.\n`)
    }
    
  usedCharacter.push(letter);
  checkLosing();
  checkWinning();
  letterCount = 0;
}


function checkUsedCharacter(letter){
  for(i=0; i<usedCharacter.length; i++) {
    if (letter === usedCharacter[i]) {
      console.log(`You've already guessed ${letter}\n`);
      return true;
    }
  } 
}

function checkWinning() {
  if (JSON.stringify(secretWord) === JSON.stringify(guessedLetters)) {
    console.log(`Congratulation, you've won!`);
    console.log(`Your reward = $ ${reward}`);
  } else if (hangmanCount != 0) {
    console.log('Keep guessing!\n');
  }
}

function checkLosing() {
  if (hangmanCount <=0) {
    console.log(`You lose!`);
    console.log(`
  +---+
  |   |
  O   |
 /|\  |
 / \  |
      |
=========
    `);
  }
}












