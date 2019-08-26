/*
TASK:
copy your "mario" project, called "mario2" or something simular.
make the following updates:
1. draw a background image behind everything.
2. create a "marioLives" variable, and set it to 5.
3. loop through the number of lives, and draw a small mario image for each life
4. reduce the lives by 1 every time mario moves off the right side of the screen.
5. update your homework repo on github
6. create a pull request to submit.
Please do steps 5 and 6 regardless of how well you did in steps 1-4.
we want you to practice useing git.
On Tuesday:
We will learn about arrays, and will continue to work through loops.
*/
var canvas = document.getElementById('canvas');
var graphics = canvas.getContext('2d');

var marioWidth = 50;
var marioHeight = 50;
var marioPositionX = canvas.width / 2;
var marioPositionY = canvas.height / 2;
var marioMoveSpeed = 5;
var marioJumpForce = 20;
var maxMarioJumpForce = 20;
var marioJumpDecay = 1;

var luigiWidth = 40;
var luigiHeight = 50;
var luigiPositionX = canvas.width / 2;
var luigiPositionY = canvas.height / 2;
var luigiMoveSpeed = 5;

var gravity = 10;

var marioTexture = new Image();
marioTexture.src = "https://1.bp.blogspot.com/-UNZ6cPAjE-8/WIe5_kSKR8I/AAAAAAAAP0E/M3h7R6-z7NkdQTcLzfdQvX8bGijulJKWQCLcB/s1600/mariojump.png";

var luigiTexture = new Image();
luigiTexture.src = "https://ui-ex.com/images/luigi-transparent-8-bit-1.png";

function update() {

	// BEGIN UPDATE LOGIC
	//-------------------------------------
	if (isKeyDown(LEFT_KEY)) {
		marioPositionX -= marioMoveSpeed;
	};
  	if (isKeyDown(RIGHT_KEY)) {
		marioPositionX += marioMoveSpeed;
	};
  	if (isKeyDown(UP_KEY)) {
		marioPositionY -= marioJumpForce;
    marioJumpForce -= marioJumpDecay;
	};
  
  //apply gravity so the character falls down
  marioPositionY += gravity;
  luigiPositionY += gravity;

  // stop the character from falling down the screen
  if( marioPositionY > canvas.height - marioHeight) {
      marioPositionY = canvas.height - marioHeight;
      marioJumpForce = maxMarioJumpForce;
  };
    if( luigiPositionY > canvas.height - luigiHeight) {
      luigiPositionY = canvas.height - luigiHeight;
  };

  // loop
 if( marioPositionX < 0 - marioWidth) {
      marioPositionX = canvas.width;
  };
if( marioPositionX > canvas.width + marioWidth) {
      marioPositionX = 0;
  };

  // luigi stalk mario logic
  if( marioPositionX > luigiPositionX + luigiWidth) {
    luigiPositionX += luigiMoveSpeed;
  }
    if( marioPositionX + luigiWidth < luigiPositionX) {
    luigiPositionX -= luigiMoveSpeed;
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
		luigiTexture,
		luigiPositionX, luigiPositionY, luigiWidth, luigiHeight);
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