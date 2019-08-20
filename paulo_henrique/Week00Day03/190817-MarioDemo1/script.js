var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var floorLevel = 76;

var marioWidth = 32;
var marioHeight = 32;
var marioPositionX = canvas.width / 2;
var marioPositionY = (canvas.height / 2);
var marioSpeed = 5;
var marioJumpForce = 30;
var maxJumpForce = 30;
var jumpForceDecay = 1;
var marioGravity = 8;

var goombaWidth = 32;
var goombaHeight = 32;
var goombaPositionX = (canvas.width / 2) - 230;
var goombaPositionY = canvas.height / 2;
var goombaSpeed = 1;
var goombaJumpForce = 30;
var maxGoombaJumpForce = 30;
var jumpGoombaForceDecay = 1.5;
var goombaGravity = 10;

var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var goombaTexture = new Image();
goombaTexture.src = "https://giantbomb1.cbsistatic.com/uploads/scale_super/9/93854/2438851-goomba%20smb%20sprite%20walk%20gif.gif";

var backgroundTexture = new Image();
backgroundTexture.src = ("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f137efa8-8b54-461c-aa90-a01efa1b7241/d8jq7ea-237407c6-13b0-4aed-a22e-f712e5d6f0ba.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2YxMzdlZmE4LThiNTQtNDYxYy1hYTkwLWEwMWVmYTFiNzI0MVwvZDhqcTdlYS0yMzc0MDdjNi0xM2IwLTRhZWQtYTIyZS1mNzEyZTVkNmYwYmEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.-uzsLTXBMZmsfYcB0zMmIvM5e4LDz4N-pyx8_LnRrPA");
var backgroundHeight = 480;
var backgroundWhidt= 640;
var backgroundPositionX = 0;
var backgroundPositionY = 0;

var marioLives = 5;
var liveTexture = new Image();
liveTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var livePositionX = 10;
var livePositionY = 5;
var livesSpacement = 40;

function update() {



	// BEGIN UPDATE LOGIC
	//-------------------------------------
	if (isKeyDown(LEFT_KEY)) {
		marioPositionX = marioPositionX - marioSpeed;
	}

	if (isKeyDown(RIGHT_KEY)) {
		marioPositionX = marioPositionX + marioSpeed;
	}

	if (isKeyDown(UP_KEY)) {
		marioPositionY -= marioJumpForce;
    marioJumpForce -= jumpForceDecay;
	}
// goomba



//Apply gravity on the character
marioPositionY += marioGravity;

//
if (marioPositionY > canvas.height - marioHeight - floorLevel){
  marioPositionY = canvas.height - marioHeight - floorLevel;
  marioJumpForce = maxJumpForce;
}
if (marioPositionX < 0){
 marioPositionX = canvas.width;
}
if (marioPositionX > canvas.width){
 marioPositionX = (canvas.width/2);
 marioPositionY = canvas.height/2;
 marioLives -= 1;
}
if (marioLives == 0){
	window.alert("GAME OVER! \nTRY AGAIN");
	marioLives = 5;

   }

//
goombaPositionY += goombaGravity;
if (goombaPositionY > canvas.height - goombaHeight - floorLevel){
  goombaPositionY = canvas.height - goombaHeight - floorLevel;
}
	if (marioPositionX > goombaPositionX + goombaWidth){
		goombaPositionX += goombaSpeed;
	}

	if(marioPositionX + marioWidth < goombaPositionX){
		goombaPositionX -= goombaSpeed;
	}
	//-------------------------------------
	// END UPDATE LOGIC

	// BEGIN DRAW LOGIC
	//-------------------------------------

    graphics.clearRect(0, 0, canvas.width, canvas.height);
        
	graphics.drawImage(
		backgroundTexture,
		backgroundPositionX, backgroundPositionY, backgroundWhidt, backgroundHeight);

	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

    graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);
	

		for (i = marioLives; i > 0; i -= 1 ){
			graphics.drawImage(
				marioTexture,
				livePositionX - livesSpacement + (livesSpacement*i),
				livePositionY, marioWidth, marioHeight);
		}
        


	//-------------------------------------

	// ask the browser to call the update function again.
	requestAnimationFrame(update)
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
  console.log(event.keyCode);
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