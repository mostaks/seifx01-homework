let trainLines = ['N','L','6']
let lineNStops = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
let lineLStops = ['8th', '6th', 'Union Square', '3rd', '1st'];
let line6Stops = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

let numStops = 0;
let stopsToTravel = [];
let stopToContinueTravel = [];

function planTrip(hopOnLine,hopOnStop,hopOffLine,hopOffStop) {

  let hopOnArr = matchTrainLine(hopOnLine);
  let hopOffArr = matchTrainLine(hopOffLine);
  let indexOfUnionSquare = hopOnArr.indexOf(`Union Square`);
  let indexOfUnionSquare2 = hopOffArr.indexOf(`Union Square`);
  let hopOnStopIndex = hopOnArr.indexOf(hopOnStop);
  let hopOffStopIdex = hopOffArr.indexOf(hopOffStop);

  //catch error
  if(!hopOnArr.includes(hopOnStop)) {
    console.log(`${hopOnLine} does not stop at ${hopOnStop}`);
    return;
  }
  if(!hopOffArr.includes(hopOffStop)) {
    console.log(`${hopOffLine} does not stop at ${hopOffStop}`);
    return;
  }
  
  if(hopOnLine === hopOffLine) {
    for(i = hopOnStopIndex; i < hopOffStopIdex; i++) {
      stopsToTravel.push(' ' + hopOnArr[i+1]);
      numStops ++;
    }
    console.log(`You must travel through the following stops on the ${hopOnLine} line: ${stopsToTravel}`);
  } else {
    for(i = hopOnStopIndex; i < indexOfUnionSquare; i++) {
      stopsToTravel.push(' ' + hopOnArr[i+1]);
      numStops ++;
    }
    if (indexOfUnionSquare2 < hopOffStopIdex) {
      for (i = indexOfUnionSquare2; i < hopOffStopIdex; i++) {
      stopToContinueTravel.push(' ' + hopOffArr[i+1]);
      numStops ++;
      }
    } else {
      for (i = indexOfUnionSquare2; i > hopOffStopIdex ; i--) {
        stopToContinueTravel.push(' ' + hopOffArr[i-1]);
        numStops ++
      }
    }
    numStops --
    console.log(`You must travel through the following stops on the ${hopOnLine} line: ${stopsToTravel}`);
    console.log(`Change at Union Square`);
    console.log(`Your journey continues through the following stops: ${stopToContinueTravel}`);
  }
  console.log(`${numStops} stops in total. \n`);
  // reset value
  numStops = 0;
  stopsToTravel =[];
  stopToContinueTravel =[];
}

function matchTrainLine(anyLine) {
  for (i = 0; i < trainLines.length; i++) {
    if (anyLine === trainLines[i]) {
      lineIndex = trainLines.indexOf(anyLine);
    }
  }
  if (lineIndex === 0) {
    trainLine = lineNStops;
  } else if (lineIndex === 1) {
    trainLine = lineLStops;
  } else if (lineIndex === 2) {
    trainLine = line6Stops;
  }
  return trainLine
}

planTrip('6', 'Times Square', '6', 'Grand Central');
planTrip('N', 'Times Square', '6', 'Grand Central');