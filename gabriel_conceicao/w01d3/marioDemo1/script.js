var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var bgTexture = new Image();
bgTexture.src = "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/0kjHIH6/old-retro-video-game-arcade-clouds-moving-on-a-blue-sky_hcd0pxim__F0000.png";

var bgWidth = canvas.width;
var bgHeight = canvas.height;


var bg2Texture = new Image();
bg2Texture.src = "https://previews.123rf.com/images/choostudio/choostudio1803/choostudio180300049/97413372-vector-game-over-phrase-in-pixel-art-8-bit-style-with-glitch-vhs-effect-three-color-half-shifted-let.jpg";

var bg2Width = canvas.width;
var bg2Height = canvas.height;


var marioTexture = new Image();
marioTexture.src = "http://vignette3.wikia.nocookie.net/fantendo/images/5/58/8bitsprite-1-.png/revision/latest?cb=20151029181053";

var marioWidth = 64;
var marioHeight = 64;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMoveSpeed = 5;
var gravity = 10;
var jumpForce = 20;
var maxJumpForce = 20;
var jumpForceDecay = 1;


var goombaTexture = new Image();
goombaTexture.src = "https://static.giantbomb.com/uploads/original/9/93854/2438851-goomba%20smb%20sprite%20walk%20gif.gif";


var goombaWidth = 64;
var goombaHeight = 64;
var goombaPositionX = 10;
var goombaPositionY = canvas.height - goombaHeight;
var goombaSpeed = 3;

var miniMarioWidth = 32;
var miniMarioHeight = 32;
var miniMarioX = miniMarioWidth;
var miniMarioY = miniMarioHeight;
var miniMario = marioTexture;



var marioLives = 5;



function update() {
	
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

	if( marioPositionX < 0) {
		marioPositionX = canvas.width;
	}


	marioPositionY += gravity;

	if( marioPositionY > canvas.height - marioHeight) {
		marioPositionY = canvas.height - marioHeight;
		jumpForce = maxJumpForce;
	}


	if (marioPositionX > goombaPositionX + goombaWidth){
		goombaPositionX += goombaSpeed;
	}

	if(marioPositionX + marioWidth < goombaPositionX){
		goombaPositionX -= goombaSpeed;
	}

    if( marioPositionX > canvas.width) {
      marioPositionX = 0;
      marioLives -=1;
  }

  graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bgTexture,
		0, 0, bgWidth, bgHeight);
    
	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

for(var i=0; i<marioLives; i++) {
   graphics.drawImage(
	  miniMario,
	  i*miniMarioWidth, 0, miniMarioWidth, miniMarioHeight );
  }

  if (marioLives === 0) {
      graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bg2Texture,
		0, 0, bg2Width, bg2Height);
  }
	requestAnimationFrame(update);

}


var keys = [];
var LEFT_KEY = 37;
var UP_KEY = 38;
var RIGHT_KEY = 39;
var DOWN_KEY = 40;


window.addEventListener('keydown', function (event) {
	keys[event.keyCode] = true;
}, true);

window.addEventListener('keyup', function (event) {
	keys[event.keyCode] = false;
}, true);

function isKeyDown(key) {
	return keys[key];
}

update();
