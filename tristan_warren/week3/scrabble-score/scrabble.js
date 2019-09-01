function scrabble(word) {
	let lowerWord = word.toLowerCase();
	let wordArray = lowerWord.split('');
	let score = 0;

	wordArray.forEach(function(letter) {
		score = score + getScore(letter);
	});

	return score;
}

function getScore(l) {
	if (
		l === 'a' ||
		l === 'e' ||
		l === 'i' ||
		l === 'o' ||
		l === 'u' ||
		l === 'l' ||
		l === 'n' ||
		l === 'r' ||
		l === 's' ||
		l === 't'
	) {
		return 1;
	} else if (l === 'd' || l === 'g') {
		return 2;
	} else if (l === 'b' || l === 'c' || l === 'm' || l === 'p') {
		return 3;
	} else if (l === 'f' || l === 'h' || l === 'v' || l === 'w' || l === 'y') {
		return 4;
	} else if (l === 'k') {
		return 5;
	} else if (l === 'j' || l === 'x') {
		return 8;
	} else if (l === 'q' || l === 'z') {
		return 10;
	} else {
		return 0;
	}
}

console.log(scrabble('cabbage'));
