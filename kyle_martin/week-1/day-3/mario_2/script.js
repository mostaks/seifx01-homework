var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var marioWidth = 32;
var marioHeight = 32;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMoveSpeed = 5;
var gravity = 10;
var jumpForce = 20;
var maxJumpForce = 20;
var jumpForceDecay = 1;
var marioLivesPositionX = 10;
var marioLivesPositionY = 10;
var spaceBetweenLifes = 40;
var marioLives = 5;

var goombaWidth = 32;
var goombaHeight = 32;
var goombaPositionX = 10;
var goombaPositionY = canvas.height - goombaHeight;
var goombaSpeed = 3;

var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var goombaTexture = new Image();
goombaTexture.src = "https://i.ya-webdesign.com/images/goomba-transparent-pixel-11.gif";

var backgroundTexture = new Image();
backgroundTexture.src = "http://oi58.tinypic.com/2j1sbbm.jpg";

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

	// apply gravity so the character falls down
	marioPositionY += gravity;

	// make mario wrap from right to left
	if( marioPositionX > canvas.width) {
		marioPositionX = 0;
	}
	// stop the character from falling down the screen
	if( marioPositionY > canvas.height - marioHeight) {
		marioPositionY = canvas.height - marioHeight;
		jumpForce = maxJumpForce;
	}
	// make character follow mario to the right
	if( marioPositionX > goombaPositionX + goombaWidth){
		goombaPositionX += goombaSpeed;
	}
	// make character follow mario to the left
	if( marioPositionX + marioWidth < goombaPositionX){
		goombaPositionX -= goombaSpeed;
	}
	// running off screen reduces life
	if( marioPositionX == canvas.width) {
		marioLives-- ;
	} 
	// wrap character from left to right side of screen
	if( marioPositionX < 0) {
		marioPositionX = canvas.width;
	}

	
	//-------------------------------------
	// END UPDATE LOGIC

	// BEGIN DRAW LOGIC
	//-------------------------------------

	graphics.clearRect(0, 0, canvas.width, canvas.height)

	//draw background
	graphics.drawImage(
		backgroundTexture, 0, 0, canvas.width, canvas.height);
	//draw goomba
	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);
	//draw mario
	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);
	//draw mario lives
	for (var i = 0; i < marioLives; i++) {
		graphics.drawImage(marioTexture, marioLivesPositionX + i * spaceBetweenLifes, marioLivesPositionY, marioWidth, marioHeight);
	}		
	//-------------------------------------

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