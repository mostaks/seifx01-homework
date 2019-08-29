// Fede's version
function letterValue(letter) {
    const map = {
        'a' : 1, 
        'e' : 1, 
        'i' : 1, 
        'o' : 1,
        'u' : 1, 
        'l' : 1, 
        'n' : 1, 
        'r' : 1,
        's' : 1, 
        't' : 1, 
        'd' : 2, 
        'g' : 2,
        'b' : 3, 
        'c' : 3, 
        'm' : 3, 
        'p' : 3,
        'f' : 4, 
        'h' : 4, 
        'v' : 4, 
        'w' : 4,
        'y' : 4, 
        'k' : 5, 
        'j' : 8, 
        'x' : 8,
        'q' : 10, 
        'z' : 10
    };

    return map[letter];
};

function scrabble(value) {
    let result = 0
    for (const char of value) {
        result = result + letterValue(char.toLowerCase());
    }
    return result;
}

console.log(scrabble('cabbage'));


// Daniels Version
const letterScore = {
    "AEIOULNRST": 1,
    "DG": 2,
    "BCHP": 3,
    "FHVMY":4,
    "K":5,
    "JX":8,
    "QZ":10
}

const scrabble = function(word) {
    let score = 0;
    for (letter of word) {
        let foundLetterScore = false;
        for (letterScoreKey of Object.keys(letterScore)) {
            if (letterScoreKey.includes(letter.toUpperCase())) {
                foundLetterScore = true;
                console.log(`letter ${letter} in letterScoreKey ${letterScoreKey} for score ${letterScore[letterScoreKey]}`);
                score += letterScore[letterScoreKey];
                break;
            }
        }
        if (!foundLetterScore) {
            throw Error(`not found letter ${letter}!`);
        }
    }
    return score;
};

console.log(scrabble("cabbage"));