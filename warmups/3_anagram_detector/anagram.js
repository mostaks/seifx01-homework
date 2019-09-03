console.log('hello');

// Version 1

let anagrams = [];

const checkForAnagram = function(word, candidateWords) {
    let sortedWord = word.split("");
    // console.log(word);
    sortedWord = sortedWord.sort();
    // console.log(word);
    sortedWord = sortedWord.join("");
    // console.log(word);

    // let sortedWord = word.split("").sort().join("");

    for (let i = 0; i < candidateWords.length; i++) {
        let candidate = candidateWords[i];
        candidate = candidate.split("").sort().join("");
        // console.log(candidate);

        if (sortedWord === candidate) {
            anagrams.push(candidateWords[i])
        }; //if
        
    }; //for

    console.log(`The anagram of ${word} is ${anagrams}`)
};

checkForAnagram("listen", ["enlists", "google", "inlets", "banana"]);


//version 2
const anagramChecker = {
    // empty array that will store the results
    anagrams: [],
  
    // method that takes the word as an argument and converts the word into a list of alphabeticised letters
    customSort: function(word){
      return word.split("").sort().join("");
    },
  
    // second method that will call customSort() and compare the input word against the array of potential matches
    checkForAnagram: function(word, candidateWords){
        this.anagrams = [];
        let sortedWord = this.customSort(word);
  
      for (var i = 0; i < candidateWords.length; i++) {
        let candidate = this.customSort(candidateWords[i]);
        // console.log(candidate)
  
        if (sortedWord === candidate) {
          this.anagrams.push(candidateWords[i])
        }
      }//for
      if (this.anagrams.length === 0) {
          console.log("We didn't find a match")
      } else{
          console.log(`The anagram of ${word} is ${this.anagrams}.`);
      }
    } // checkForAnagram
  }; // anagramChecker
  
  
anagramChecker.checkForAnagram("listen", ["enlists", "google", "inlets", "banana"]);
anagramChecker.checkForAnagram("listen", ["google", "google", "google", "banana"]);

// Pitt's solution

let wordList = {
    words : ["enlists" ,"google", "inlets", "banana"]
  }
  
  function anagramDetector(word) {
    word = word.split('').sort().join('');
  
    for(i=0; i<wordList.words.length; i++) {
      let tempWordHolder = wordList.words[i].split('').sort().join('');
      if (word === tempWordHolder ) {
        let match = tempWordHolder;
        return wordList.words[i];
      }
    }
  }
  
  console.log(anagramDetector('listen')); 


//   Ridwan's solution

let x = "listen";
let y = ["enlists", "google", "inlets", "banana"];



let p  = x.split("");
let ltr = p.sort();
ltr = ltr.join("");


for (elm in y) {
    let elmt = y[elm].split("");
    elmt = elmt.sort();
    elmt = elmt.join("");
    if (ltr === elmt) {
        console.log(` the anagram is ${y[elm]}`);
    }


}