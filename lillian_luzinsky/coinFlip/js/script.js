//id="leftArrow"
//id="rightArrow"
//id="flipButton"
//id="countNumber"
//id="headsCount">
//id="tailsCount">

let countNumber = 0;
let heads = 0;
let tails = 0;

function updateScore() {
    let score = document.getElementById("countNumber");
    score.innerHTML = countNumber;
}

function updateHeads(){
    let headScore = document.getElementById("headsCount");
    headScore.innerHTML = headsCount
}

updateScore();

function clickRight(){
    countNumber++
    updateScore();
}

document.getElementById("rightArrow").addEventListener("click", clickRight);

function clickLeft() {
    if(countNumber > 0){
        countNumber--
        updateScore();
    }
}

document.getElementById("leftArrow").addEventListener("click", clickLeft);

function pressFlip(){
    if(document.getElementById("flipButton").addEventListener("click", pressFlip)){
        updateHeads();
    }
}

function updateHeads(){
    if(pressFlip){
        heads++
    }
}

//document.getElementById("flipButton").addEventListener("click", pressFlip);





