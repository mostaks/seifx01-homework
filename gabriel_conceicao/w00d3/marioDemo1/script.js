var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var bgTexture = new Image();
bgTexture.src = "https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/0kjHIH6/old-retro-video-game-arcade-clouds-moving-on-a-blue-sky_hcd0pxim__F0000.png";

var bgWidth = canvas.width;
var bgHeight = canvas.height;
var bgX = 0;
var bgY = 0;

var bg2Texture = new Image();
bg2Texture.src = "https://previews.123rf.com/images/choostudio/choostudio1803/choostudio180300049/97413372-vector-game-over-phrase-in-pixel-art-8-bit-style-with-glitch-vhs-effect-three-color-half-shifted-let.jpg";

var bg2Width = canvas.width;
var bg2Height = canvas.height;
var bg2X = 0;
var bg2Y = 0;

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

var miniMario2Width = miniMarioWidth;
var miniMario2Height = miniMarioHeight;
var miniMario2X = miniMarioWidth*2;
var miniMario2Y = miniMarioHeight;
var miniMario2 = marioTexture;

var miniMario3Width = miniMarioWidth;
var miniMario3Height = miniMarioHeight;
var miniMario3X = miniMarioWidth*3;
var miniMario3Y = miniMarioHeight;
var miniMario3 = marioTexture;

var miniMario4Width = miniMarioWidth;
var miniMario4Height = miniMarioHeight;
var miniMario4X = miniMarioWidth*4;
var miniMario4Y = miniMarioHeight;
var miniMario4 = marioTexture;

var miniMario5Width = miniMarioWidth;
var miniMario5Height = miniMarioHeight;
var miniMario5X = miniMarioWidth*5;
var miniMario5Y = miniMarioHeight;
var miniMario5 = marioTexture;

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

  if (marioLives === 5) {
    	graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bgTexture,
		bgX, bgY, bgWidth, bgHeight);
    
	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

  graphics.drawImage(
	  miniMario,
	  miniMarioX, miniMarioY, miniMarioWidth, miniMarioHeight);

  graphics.drawImage(
	  miniMario2,
	  miniMario2X, miniMario2Y, miniMario2Width, miniMario2Height);

  graphics.drawImage(
	  miniMario3,
	  miniMario3X, miniMario3Y, miniMario3Width, miniMario3Height);

  graphics.drawImage(
	  miniMario4,
	  miniMario4X, miniMario4Y, miniMario4Width, miniMario4Height);

  graphics.drawImage(
	  miniMario5,
	  miniMario5X, miniMario5Y, miniMario5Width, miniMario5Height);
  }

  if (marioLives === 4) {
    	graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bgTexture,
		bgX, bgY, bgWidth, bgHeight);
    
	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

  graphics.drawImage(
	  miniMario,
	  miniMarioX, miniMarioY, miniMarioWidth, miniMarioHeight);

  graphics.drawImage(
	  miniMario2,
	  miniMario2X, miniMario2Y, miniMario2Width, miniMario2Height);

  graphics.drawImage(
	  miniMario3,
	  miniMario3X, miniMario3Y, miniMario3Width, miniMario3Height);

  graphics.drawImage(
	  miniMario4,
	  miniMario4X, miniMario4Y, miniMario4Width, miniMario4Height);
  }

  if (marioLives === 3) {
    	graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bgTexture,
		bgX, bgY, bgWidth, bgHeight);
    
	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

  graphics.drawImage(
	  miniMario,
	  miniMarioX, miniMarioY, miniMarioWidth, miniMarioHeight);

  graphics.drawImage(
	  miniMario2,
	  miniMario2X, miniMario2Y, miniMario2Width, miniMario2Height);

  graphics.drawImage(
	  miniMario3,
	  miniMario3X, miniMario3Y, miniMario3Width, miniMario3Height);
  }

  if (marioLives === 2) {
    	graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bgTexture,
		bgX, bgY, bgWidth, bgHeight);
    
	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

  graphics.drawImage(
	  miniMario,
	  miniMarioX, miniMarioY, miniMarioWidth, miniMarioHeight);

  graphics.drawImage(
	  miniMario2,
	  miniMario2X, miniMario2Y, miniMario2Width, miniMario2Height);
  }

    if (marioLives === 1) {
    	graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bgTexture,
		bgX, bgY, bgWidth, bgHeight);
    
	graphics.drawImage(
		marioTexture,
		marioPositionX, marioPositionY, marioWidth, marioHeight);

	graphics.drawImage(
		goombaTexture,
		goombaPositionX, goombaPositionY, goombaWidth, goombaHeight);

  graphics.drawImage(
	  miniMario,
	  miniMarioX, miniMarioY, miniMarioWidth, miniMarioHeight);
  }

  if (marioLives === 0) {
    	graphics.clearRect(0, 0, canvas.width, canvas.height)
      
    graphics.drawImage(
		bg2Texture,
		bg2X, bg2Y, bg2Width, bg2Height);
  }

	if( marioPositionX > canvas.width) {
		marioPositionX = 0;
  for (var i=marioLives; i<=marioLives; i-=1) {
  if(i===5) {
   marioLives -= 1;
   break;
  } else if(i===4) {
   marioLives -= 1;
   break;
   
 } else if(i===3) {
   marioLives -= 1;
   break;
   
 } else if(i===2) {
   marioLives -= 1;
   break;
   
 } else if(i===1) {
  marioLives -= 1;
   break;
   
 }else if(i===0) {
   break;
 } 
 }
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
