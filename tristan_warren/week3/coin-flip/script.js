function changeNum(direction) {
	let currentNum = getCurrentNum();
	if (direction === 'left') {
		currentNum -= 1;
	} else if (direction === 'right') {
		currentNum += 1;
	}
	if (currentNum < 0) {
		currentNum = 0;
	}
	updateNum(currentNum);
}

let flipButton = document.getElementsByClassName('rectangles')[0];

function flipCoins() {
	let currentNum = getCurrentNum();
	let flips = [ 0, 0 ];
	for (var i = 0; i < currentNum; i++) {
		let e = Math.ceil(Math.random() * 2);
		if (e === 1) {
			flips[0] += 1;
		} else {
			flips[1] += 1;
		}
	}

	history.unshift(flips[1]);
	history.unshift(flips[0]);
	history.unshift(flips[0] + flips[1]);

	return flips;
}

function updateFlip() {
	let coins = flipCoins();
	updateRectangleColour();
	document.querySelectorAll('.rectangles h2')[0].innerText = 'Heads: ' + coins[0];
	document.querySelectorAll('.rectangles h2')[1].innerText = 'Tails: ' + coins[1];
	updateHistory();
}

function updateNum(cur) {
	var up = document.getElementById('num');
	up.innerText = cur;
}

function getCurrentNum() {
	return parseInt(document.getElementById('num').innerText);
}

function updateRectangleColour() {
	var topRectangle = document.getElementsByClassName('rectangles')[0];
	var randomColor = 'rgb(' + rC() + ',' + rC() + ',' + rC() + ')';

	topRectangle.style.backgroundColor = randomColor;
}

function rC() {
	return Math.floor(Math.random() * 255);
}

let history = [];

function updateHistory() {
	let tds = document.querySelectorAll('tbody tr td');
	let upTab = history.slice(0, 9);
	console.log(upTab);
	for (var x = 0; x < upTab.length; x++) {
		tds[x].innerText = upTab[x];
	}
}
