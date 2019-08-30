console.log("Up and running!");

var cards = [
	{
		rank: 'queen',
		suit: 'hearts',
		cardImage: 'images/queen-of-hearts.png'
	},
	{
		rank: 'queen',
		suit: 'diamonds',
		cardImage: 'images/queen-of-diamonds.png'
	},
	{
		rank: 'king',
		suit: 'hearts',
		cardImage: 'images/king-of-hearts.png'
	},
	{
		rank: 'king',
		suit: 'diamonds',
		cardImage: 'images/king-of-diamonds.png'
	}
];

var cardsInPlay = [];


function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("match");
		console.log("You found a match!");
	} else {
		alert("try again mate");
		console.log("Try again mate");
	}
};

var flipCard = function () {
	var cardId = this.getAttribute('data-id');
	console.log("User flipped " + cards[cardId].rank);

	cardsInPlay.push(cards[cardId]);
	this.setAttribute('src', cards[cardId].cardImage);
	
//	console.log(cards[cardId].cardImage);
//	console.log(cards[cardId].suit);
	
	checkForMatch();
};

function createBoard () {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
};

createBoard();
