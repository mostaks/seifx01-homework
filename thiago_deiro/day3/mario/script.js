var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var floorLeve = 58;


var marioWidth = 32;
var marioHeight = 32;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMovespeed = 5;
var gravity = 10;
var maxJumpForce = 25;
var jumpForce = 20;
var jumpForceDecay = 1;

var backmarioImage = new Image();
backmarioImage.src = ("https://wallup.net/wp-content/uploads/2016/01/270962-Mario_Bros.-video_games-Nintendo-748x468.jpg");
var backmarioImageHeight =408;
var backmarioImageWidth = 680;
var backmarioImagePositionX = 0;
var backmarioImagePositionY = 0;


var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";


var goombaTexture = new Image();
goombaTexture.src = "https://static.giantbomb.com/uploads/original/9/93854/2438851-goomba%20smb%20sprite%20walk%20gif.gif";

var goombaWidth = 34;
var goombaHeight = 34;
var goombaPositionX = 0;
var goombaPositionY = canvas.height - goombaHeight;
var goombaMovespeed = 3;

var marioLivesNumb = 5
var marioLives = new Image();
marioLives.src = ("http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053"); 

var marioLivesPositionX = 10;
var marioLivesPositionY = 10;

var livePositionX = 10;
var livePositionY = 5;
var livesSpacement = 40;




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

  if( goombaPositionY > canvas.height - goombaHeight - floorLeve);{
    goombaPositionY = canvas.height - goombaHeight - floorLeve;
  }


   marioPositionY += gravity;

   if(marioPositionY > canvas.height - marioHeight - floorLeve){
    marioPositionY = canvas.height - marioHeight - floorLeve;
    jumpForce = maxJumpForce;
  }
   if(marioPositionX > canvas.width){
    marioPositionX = canvas.width/2;
    marioPositionY = canvas.height/2;
    marioLivesNumb -= 1;
   }
    //if(marioPositionX <0);
   if(marioPositionX < canvas.width - canvas.width){
     marioPositionX = canvas.width;
   }

  

	// BEGIN DRAW LOGIC
	//-------------------------------------

	graphics.clearRect(0, 0, canvas.width, canvas.height)
  graphics.drawImage(
		backmarioImage,
		backmarioImagePositionX, backmarioImagePositionY, backmarioImageWidth, backmarioImageHeight);

	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);
    
  graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

    for (i = marioLivesNumb; i > 0; i -= 1 ){
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