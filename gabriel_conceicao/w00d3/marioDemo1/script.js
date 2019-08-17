var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var marioWidth = 64;
var marioHeight = 64;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMoveSpeed = 5;
var gravity = 10;
var jumpForce = 20;
var maxJumpForce = 20;
var jumpForceDecay = 1;

var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var goombaTexture = new Image();
goombaTexture.src = 
"https://static.giantbomb.com/uploads/original/9/93854/2438851-goomba%20smb%20sprite%20walk%20gif.gif";

var goombaWidth = 64;
var goombaHeight = 64;
var goombaPositionX = 10;
var goombaPositionY = canvas.height-goombaHeight;
var goombaMoveSpeed = 3;

 
function update() {

	// BEGIN UPDATE LOGIC
	//-------------------------------------
	if (isKeyDown(LEFT_KEY)) {
		marioPositionX -= marioMoveSpeed;
	}

  	if (isKeyDown(RIGHT_KEY)) {
		marioPositionX += marioMoveSpeed;

	}

  if (isKeyDown(UP_KEY)) {
    marioPositionY -= jumpForce;
    jumpForce -= jumpForceDecay;
  }

  marioPositionY += gravity;

  if( marioPositionY > canvas.height - marioHeight) {
      marioPositionY = canvas.height - marioHeight;
      jumpForce = maxJumpForce;
  }


  if( marioPositionX > canvas.width) {
      marioPositionX = 0;
  }

  if( marioPositionX < 0) {
      marioPositionX = canvas.width;
  }
  if(marioPositionX > goombaPositionX + goombaWidth){
    goombaPositionX += goombaMoveSpeed;
  }

  if(marioPositionX + marioWidth < goombaPositionX){
    goombaPositionX -= goombaMoveSpeed;
  }
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