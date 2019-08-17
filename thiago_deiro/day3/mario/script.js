var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');




var marioWidth = 32;
var marioHeight = 32;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMovespeed = 5;
var gravity = 10;
var maxJumpForce = 20;
var jumpForce = 20;
var jumpForceDecay = 1;

var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var goombaTexture = new Image();
goombaTexture.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6a9908e0-c58e-489e-8a9e-6cec41893a76/dbijtgu-8e1502d9-66bc-4d7a-9a8f-0df9ea72d2a2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzZhOTkwOGUwLWM1OGUtNDg5ZS04YTllLTZjZWM0MTg5M2E3NlwvZGJpanRndS04ZTE1MDJkOS02NmJjLTRkN2EtOWE4Zi0wZGY5ZWE3MmQyYTIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.QGSQVnW1Gv3Vg0E4gwbDm0U-BNjOrtnJzHjIfsCDj5s";

var goombaWidth = 64;
var goombaHeight = 64;
var goombaPositionX = 0;
var goombaPositionY = canvas.height - goombaHeight;
var goombaMovespeed = 3;

function update() {

	// BEGIN UPDATE LOGIC
	//-------------------------------------
	if (isKeyDown(LEFT_KEY)) {
		marioPositionX -= marioMovespeed;
    
	}
	//-------------------------------------
	// END UPDATE LOGIC
  if (isKeyDown(RIGHT_KEY)) {
		marioPositionX += marioMovespeed;
    
	}

  if(isKeyDown(UP_KEY)){
    marioPositionY -= jumpForce;
    jumpForce -= jumpForceDecay; 
  }


  if(marioPositionX > goombaPositionX + goombaWidth){
    goombaPositionX += goombaMovespeed;

  }
  if(marioPositionX + marioWidth < goombaPositionX){
    goombaPositionX -= goombaMovespeed;
  }


   marioPositionY += gravity;

   if(marioPositionY > canvas.height - marioHeight){
    marioPositionY = canvas.height - marioHeight;
    jumpForce = maxJumpForce;
  }
   if(marioPositionX > canvas.width){
     marioPositionX = canvas.width - canvas.width;
   }
    //if(marioPositionX <0);
   if(marioPositionX < canvas.width - canvas.width){
     marioPositionX = canvas.width;
   }


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