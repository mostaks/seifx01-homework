const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];   
const L = ['8th', '6th', 'Union Square', '3rd', '1st'];
const six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

const convertNameOfLineToString = function(name){
    let nameOfLine;
    if(name === N) {
        nameOfLine = "N line";
    } else if(name === L){
        nameOfLine = "L line";
    } else if(name === six){
        nameOfLine = "6 line";
    }
    return nameOfLine;
}

const planTrip = function(startLine, startStop, finishingLine, finishStop) {
    let startingIndex = startLine.indexOf(startStop); // get index of stating line
    let finishIndex = finishingLine.indexOf(finishStop); // get index of finishing line
    const changeAt = finishingLine.indexOf('Union Square');

    let numberOfStops = 0; //numeber of stops counter
    let travelThroughStationsOnFirstLine = []; // gives stations passed through on the 1st line
    let travelThroughStationsOnNextLine = []; //gives stations passed throgh on the 2nd line

    for(let i = startingIndex +1; i < finishIndex; i++){
        travelThroughStationsOnFirstLine.push(startLine[i]);//pushs the stations traveled through on the first line.
        numberOfStops++;// tracks number of stops. 

        if(startLine[i].includes('Union Square') && startLine !== finishingLine){
        } 
    }

    if(changeAt > finishIndex){
        for(let k = changeAt; k > finishIndex; k--) //for (var i = 10; i > 5; i--) { alert(i); }
        travelThroughStationsOnNextLine.push(finishingLine[k]); //pushs the stations traveled through on the first line.
        numberOfStops++;
    } else {
    for(let j = changeAt +1; j < finishIndex; j ++){
        travelThroughStationsOnNextLine.push(finishingLine[j]); //pushs the stations traveled through on the first line.
        numberOfStops++; // tracks number of stops. 
    }
    }
    
    //logs
    console.log(`You must travel through the following stops on the ${convertNameOfLineToString(startLine)}: ${travelThroughStationsOnFirstLine.join(', ')}.`);
    console.log(`Your journey continues through the following stops ${travelThroughStationsOnNextLine.join(', ')}.`);
    console.log(`${numberOfStops} stops in total.`);
    
}
planTrip( N, 'Times Square', six, '33rd');



// planTrip('N', 'Times Square', '6', '33rd'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."