const N = ['Times Square', '34th', '28th', '23rd', 'Union Square', '8th'];
const L = ['8th', '6th', 'Union Square', '3rd', '1st'];
const six = ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place'];

function reverseArray(array) {
    return array.slice(0).reverse();
}

const convertNameOfLineToString = function (name) {
    let nameOfLine;
    if (name === N) {
        nameOfLine = "N line";
    } else if (name === L) {
        nameOfLine = "L line";
    } else if (name === six) {
        nameOfLine = "6 line";
    }
    return nameOfLine;
}

let countStops = 0;
let passedStationsStart = [];
let passedStationsFinish = [];
let changeAt;

const planTrip = function (startLine, startStop, finishLine, finishStop) {
//start line
//startline if on different line first travel to Union Square
if(startLine !== finishLine){
if (startLine.indexOf('Union Square') > startLine.indexOf(startStop)) { //travel up the first line
        for (let i = startLine.indexOf(startStop); i < startLine.indexOf('Union Square'); i++) {
            passedStationsStart.push(startLine[i]);
            countStops++;
            changeAt = "change at Union Square";
        }
    }
    else if (startLine.indexOf('Union Square') < startLine.indexOf(startStop)) { //travel down the first line

        let reversedArray = reverseArray(startLine);

        for (let j = reversedArray.indexOf(startStop); j < reversedArray.indexOf('Union Square'); j++) {
            passedStationsStart.push(reversedArray[j])
            countStops++
            changeAt = "change at Union Square";
        }
    }
    //finish line

    if (finishLine.indexOf('Union Square') < finishLine.indexOf(finishStop)) { //travel up the next line
        for (let i = finishLine.indexOf('Union Square'); i < finishLine.indexOf(finishStop); i++) {
            passedStationsFinish.push(finishLine[i]);
            countStops++;
        }
    }
    else if (finishLine.indexOf('Union Square') > finishLine.indexOf(finishStop)) { //travel down the next line

        let reversedArray = reverseArray(finishLine);

        for (let j = reversedArray.indexOf('Union Square'); j < reversedArray.indexOf(finishStop); j++) {
            passedStationsFinish.push(reversedArray[j])
            countStops++
        }
    }
}
    // line is the same
    if(startLine === finishLine){
        if (startLine.indexOf(finishStop) > startLine.indexOf(startStop)) { //travel up the first line
            for (let i = startLine.indexOf(startStop); i < startLine.indexOf(finishStop); i++) {
                passedStationsStart.push(startLine[i]);
                countStops++;
            }
        }
        else if (startLine.indexOf(finishStop) < startLine.indexOf(startStop)) { //travel down the first line
    
            let reversedArray = reverseArray(startLine);
    
            for (let j = reversedArray.indexOf(startStop); j < reversedArray.indexOf(finishStop); j++) {
                passedStationsStart.push(reversedArray[j])
                countStops++
            }
        }
    }

    console.log(`You must travel through the following stops on the ${convertNameOfLineToString(startLine)}: ${passedStationsStart.join(', ')}.`);
    if (changeAt !== undefined) {
        console.log(changeAt)
    }
    if (startLine !== finishLine) {
    console.log(`Continue on ${convertNameOfLineToString(finishLine)} through sations: ${passedStationsFinish.join(', ')}.`);
    }
    console.log(`${countStops} stops in total`);
}

planTrip(N, 'Times Square', six, '33rd');