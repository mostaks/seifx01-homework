let word_to_guess = ['B', 'A', 'N', 'A', 'N', 'A'];
let word_to_guess_hidden = ['_', '_', '_', '_', '_', '_'];
let cash_prize = 0;
let guessed_letters = [];
let guess_count = 0;
let hangman_limbs = 6;

function display_answer_vertical() {
  for(let i = 0; i < word_to_guess.length; i++) {
    console.log(word_to_guess[i])
  }
};

// index off function
function ArrayIndexOf(arr, value) {
  for(let i=0; i<arr.length; i++) {
    if( arr[i] === value )
      return i;
  }
  return '-1';
};

//ARRAY INCLUDES AS A FOR LOOP
function ArrayIncludes(arr, value) {
  for(let i=0; i<arr.length; i++) {
    if( arr[i] == value )
      return true;
  }
  return false;
};


// display arr without spaces function
function display_arr(arr) {
  return arr.join("");
};


//guess 1x letter function
function guess_letter(letter) {

  if(ArrayIncludes(guessed_letters, letter) === true) {
    return `you already guessed ${letter} idiot`;
  };

  if(ArrayIncludes(guessed_letters, letter) === false) {
    guessed_letters.push(letter);
  };
  
  for(let i = 0; i < word_to_guess.length; i++) {
    if(letter === word_to_guess[i]) {
      word_to_guess_hidden[i] = letter;
      cash_prize = cash_prize + 100;
      console.log('wow congrats, reward upped to $' + cash_prize);
      console.log(display_arr(word_to_guess_hidden));
    }
  };

  if(ArrayIncludes(word_to_guess_hidden, '_') === false) {
    console.log(`wow you correctly guessed the word ${display_arr(word_to_guess)} and won yourself $ ${cash_prize} with ${guess_count} incorrect guesses.`);
  };

  if(ArrayIncludes(word_to_guess, letter) === false) {
    cash_prize = cash_prize - 100;
    console.log('idiot guess, your prize just dropped to $' + cash_prize);
    guess_count = guess_count + 1;
  };

  if(guess_count > hangman_limbs - 1) {
  console.log(`%c
      _______
     |/      |
     |      (_)
     |      \\|/
     |       |
     |      / \\
     |
 ____|___`, )
    return 'hangman dead, you lose';
  };

};