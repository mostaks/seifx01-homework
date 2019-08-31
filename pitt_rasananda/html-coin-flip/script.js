let numberOfFlip = parseInt(document.getElementById('number-of-flip').innerHTML);
let leftBtn = document.getElementById('leftBtn');
let rightBtn = document.getElementById('rightBtn');
let flipBtn = document.getElementById('flipBtn');
let historyBtn = document.getElementById('showHistoryBtn');
let history = [];
let showHistoryStatus = false;
let historyList = document.getElementById("history-list");
let historyPane = document.getElementById("history-pane");

rightBtn.onclick = function() {
  numberOfFlip ++;
  return document.getElementById('number-of-flip').innerHTML = numberOfFlip;
}

leftBtn.onclick = function() {
  if (numberOfFlip >0) {
    numberOfFlip --;
    return document.getElementById('number-of-flip').innerHTML = numberOfFlip;
  } 
}

flipBtn.onclick = function() {
  let numberOfHeads = 0;
  let numberOfTails = 0;
  
  if (numberOfFlip >=1) {
    for (i=0; i<numberOfFlip; i++) {
      if(Math.random() < 0.5) {
        numberOfHeads ++;
      } else {
        numberOfTails ++;
      }
    }  
  }
  // history.push({flips: numberOfFlip, heads : numberOfHeads, tails : numberOfTails});
  displayHistory(numberOfFlip, numberOfHeads, numberOfTails); 
  document.getElementById('number-of-head').innerHTML = numberOfHeads;
  document.getElementById('number-of-tail').innerHTML = numberOfTails;
  
}

function displayHistory(numberOfFlip, numberOfHeads, numberOfTails) {  
    let historyRow = document.createElement('div');
    historyRow.className = 'row';
    historyRow.innerHTML = `<div class="column"> ${numberOfFlip} </div><div class="column"> ${numberOfHeads} </div><div class="column"> ${numberOfTails}</div>`
    historyList.appendChild(historyRow);
  
}

function showHideHistory() {
  if (showHistoryStatus === false) {
    historyPane.style.display ="block";
    document.getElementById('showHistoryBtn').innerHTML = 'Hide History';
    return showHistoryStatus = true;
  } else {
    historyPane.style.display = "none";
    document.getElementById('showHistoryBtn').innerHTML = 'Show History';
    return showHistoryStatus = false;
  }
}

showHistoryBtn.addEventListener("click", showHideHistory);

