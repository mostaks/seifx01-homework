let coinCount = 0; 

const increaseCoin = function() {
    coinCount++;
    document.getElementById("numberOfCoins").innerHTML = coinCount;
}; 
document.getElementById("increaseCoin").addEventListener("click", increaseCoin);

const decreaseCoin = function() {
    if(coinCount === 0){
        return; 
    }
    coinCount--;
    document.getElementById("numberOfCoins").innerHTML = coinCount;
}; 
document.getElementById("decreaseCoin").addEventListener("click", decreaseCoin);


let heads = 0;
let tails = 0;

const flipCoin = function() {
    if(Math.random() < 0.50) {
        heads++;
    } else {
        tails++;
    }
    document.getElementById("tails").innerHTML = tails;
    document.getElementById("heads").innerHTML = heads;
}
document.getElementById("flipButton").addEventListener("click", flipCoin);

const reset = function() {
    wins = "";
    if(heads > tails){
        wins = "HEADS WINS";
    } else if (tails > heads){
        wins = "TAILS WINS";
    } else if (tails == heads){
        wins = "DRAW"
    }
    
    if((heads + tails) > coinCount) {
        heads = 0; 
        tails = 0; 
    }
    if((heads + tails) === coinCount){
        document.getElementById("flipButton").innerHTML = wins;
        document.getElementById("flipButton").style.backgroundColor = "#5271ff"; 
    } else {
        document.getElementById("flipButton").innerHTML = "FLIP";
        document.getElementById("flipButton").style.backgroundColor = "#ff761b";
    }

    document.getElementById("tails").innerHTML = tails;
    document.getElementById("heads").innerHTML = heads;
}
document.getElementById("flipButton").addEventListener("click", reset);