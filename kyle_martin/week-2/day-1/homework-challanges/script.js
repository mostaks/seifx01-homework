// The Word Guesser
let word = ['s','u','r','f']
let guesses = []; 

function guessLetter(guess){
  for(let i = 0; i < word.length; i++){
    if(guess === word[i]){
      guesses.push(word[i]);
      console.log(guesses);
      console.log("congratulations you found a match");
    } if(guesses.length === word.length) {
      console.log("congratulations you win");
      } 
  } 
}
guessLetter('s');
guessLetter('u');
guessLetter('r');
guessLetter('f');

//Bonus: Make it more like Wheel of Fortune

let word = ['s','u','r','f']
let guesses = []; 
let reward = 0;

function guessLetter(guess){
  for(let i = 0; i < word.length; i++){
    if(guess === word[i]){
      guesses.push(word[i]);
      reward += Math.floor(Math.random() * 100);
      console.log(guesses);
    } 
    if((guess !== word[i])){
      reward += Math.floor(Math.random() * 25);
    }
    if(guesses.length === word.length){
      console.log(`congratulations your total winnings are $${reward}`);
    }
  }   
}
guessLetter('s');
guessLetter('u');
guessLetter('r');
guessLetter('f');