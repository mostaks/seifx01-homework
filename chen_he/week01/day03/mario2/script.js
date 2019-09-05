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
var goombaWidth = 80;
var goombaHeight = 80;
var goombaPositionX = canvas.width / 3;
var goombaPositionY = canvas.height / 3;
var goombaMoveSpeed = 3;
var flyingTurtleWidth = 100;
var flyingTurtleHeight = 100;
var flyingTurtlePositionX = canvas.width / 4;
var flyingTurtlePositionY = canvas.height / 4;
var flyingTurtleMoveSpeed = 10;
var marioLives = 5;



var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var marioLifeOne = new Image();
marioLifeOne.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var marioLifeTwo = new Image();
marioLifeTwo.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var marioLifeThree = new Image();
marioLifeThree.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var marioLifeFour = new Image();
marioLifeFour.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var marioLifeFive = new Image();
marioLifeFive.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var backgroundImage = new Image();
backgroundImage.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQYAv1MC4q5ZTSPsDLRqhsYAhI-1TFZFVWisa8noZLLkPddBMr";

var goombaTexture = new Image();
goombaTexture.src = "https://i.ya-webdesign.com/images/goomba-transparent-pixel-11.gif";

var flyingTurtleTexture = new Image();
flyingTurtleTexture.src = 
"https://static.wixstatic.com/media/a39ad2_d4e65c82bb164c79a278467a30771135~mv2.gif";

function update() {
 
	// BEGIN UPDATE LOGIC
	//-------------------------------------
	if (isKeyDown(LEFT_KEY)) {
		marioPositionX -= marioMoveSpeed;
	}

  	if (isKeyDown(RIGHT_KEY)) {
		marioPositionX += marioMoveSpeed;
	}

  if(isKeyDown(UP_KEY)) {
    marioPositionY -= jumpForce;
    jumpForce -= jumpForceDecay;
  }
  // apply gravity so the character falls down
  marioPositionY += gravity;
  goombaPositionY += gravity;
  flyingTurtlePositionX -= 3;


  // stop the character from falling down the screen
  if(marioPositionY > canvas.height - marioHeight) {
    marioPositionY = canvas.height - marioHeight;
    jumpForce = maxJumpForce;
  }

   if(marioPositionX > canvas.width) {
    marioPositionX = 0;
  }
  //wrap mario from left to right
   if(marioPositionX < 0) {
     marioPositionX = canvas.width;
   }

    if(goombaPositionY > canvas.height - goombaHeight) {
    goombaPositionY = canvas.height - goombaHeight;
    jumpForce = maxJumpForce;
  }

   if(marioPositionX > goombaPositionX + goombaWidth) {
    goombaPositionX += goombaMoveSpeed;
  }
  //wrap goomba from left to right
   if(marioPositionX + marioWidth < goombaPositionX) {
     goombaPositionX -= goombaMoveSpeed;
   }

    if(flyingTurtlePositionX < 0) {
     flyingTurtlePositionX = canvas.width;
   }
	//-------------------------------------
	// END UPDATE LOGIC
	// BEGIN DRAW LOGIC
	//-------------------------------------

	graphics.clearRect(0, 0, canvas.width, canvas.height)

  graphics.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

  graphics.drawImage(
    marioLifeOne, 0, 0, marioWidth, marioHeight
  );

  graphics.drawImage(
    marioLifeTwo, marioWidth, 0, marioWidth, marioHeight
  );

  graphics.drawImage(
    marioLifeThree, marioWidth*2, 0, marioWidth, marioHeight
  );

  graphics.drawImage(
    marioLifeFour, marioWidth*3, 0, marioWidth, marioHeight
  );

  graphics.drawImage(
    marioLifeFive, marioWidth*4, 0, marioWidth, marioHeight
  );

  graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);
  
  graphics.drawImage(
		flyingTurtleTexture,
		flyingTurtlePositionX, flyingTurtlePositionY, flyingTurtleWidth, flyingTurtleHeight);
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