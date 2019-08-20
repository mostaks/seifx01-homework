var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var marioWidth = 32;
var marioHeight = 32;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMoveSpeed = 5;
var gravity = 5;
var jumpForce = 20;
var maxJumpForce = 20;
var jumpForceDecay = 0.7;

let marioLives = 5;


var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var goombaTexture = new Image();
goombaTexture.src = "https://i.ya-webdesign.com/images/goomba-transparent-pixel-11.gif";


var goombaWidth = 100;
var goombaHeight = 100;
var goombaPositionX = 10;
var goombaPositionY = canvas.height - goombaHeight;
var goombaSpeed = 3;

function drawLives(){

	let marioLivesPositionX = 20;

	for (let i = 0; i < marioLives ; i++){
	
		graphics.drawImage(
			marioTexture,
			marioLivesPositionX, 0, marioWidth, marioHeight
		)

		marioLivesPositionX = marioLivesPositionX + marioWidth

	}
}

function reduceLife(){
	if(marioPositionX == canvas.width){
		marioLives--;
	}

	if(marioLives ==0){
		alert("Game Over")
		marioLives = 5;
	}

	return marioLives;
}

function update() {

	// BEGIN UPDATE LOGIC
	//------------------------------------

	if (isKeyDown(LEFT_KEY)) {
		marioPositionX = marioPositionX - marioMoveSpeed;
	}

	if (isKeyDown(RIGHT_KEY)) {
		marioPositionX = marioPositionX + marioMoveSpeed;
	}

	if(isKeyDown(UP_KEY)) {
		marioPositionY -= jumpForce;
		jumpForce -= jumpForceDecay;
	}

	// wrap character from left to right side of screen
	if( marioPositionX < 0) {
		marioPositionX = canvas.width;
	}

	// make mario wrap from right to left
	if( marioPositionX > canvas.width) {
		marioPositionX = 0;
	}

	// apply gravity so the character falls down
	marioPositionY += gravity;

	// stop the character from falling down the screen
	if( marioPositionY > canvas.height - marioHeight) {
		marioPositionY = canvas.height - marioHeight;
		jumpForce = maxJumpForce;
	}

	// TASK:
	// 1 - make goomba move to the right when mario is on the right side of goomba
	// 2 - make goomba move to the left with mario is on the left side of goomba

	if (marioPositionX > goombaPositionX + goombaWidth){
		goombaPositionX += goombaSpeed;
	}

	if(marioPositionX + marioWidth < goombaPositionX){
		goombaPositionX -= goombaSpeed;
	}

	// we will have a 15 min break at 11:00
	// when we return, we will get started with splitting this into seperate files
	// and get started working with git.
	
	//-------------------------------------
	// END UPDATE LOGIC

	// BEGIN DRAW LOGIC
	//-------------------------------------

	graphics.clearRect(0, 0, canvas.width, canvas.height)

	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

	//-------------------------------------


	drawLives();
	marioLives = reduceLife();
	
	// ask the browser to call the update function again.
	requestAnimationFrame(update);

}






// DO NOT EDIT BELOW THIS LINE
//--------------------------------------------------------------------

var keys = [];
var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;

// check key down events
window.addEventListener('keydown', function (event) {
	keys[event.keyCode] = true;
}, true);

// check key release events
window.addEventListener('keyup', function (event) {
	keys[event.keyCode] = false;
}, true);

function isKeyDown(key) {
	return keys[key];
}


update();
//--------------------------------------------------------------------