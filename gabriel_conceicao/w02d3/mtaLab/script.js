const trainStation = [
    { 
    line:'N',
    stations:['Times Square', '34th', '28th', '23rd', 'Union Square', '8th']
    },
    {
    line:'L',
    stations:['8th', '6th', 'Union Square', '3rd', '1st']  
    },
    {
    line:'6',
    stations:['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
    }
];

let stationsTravelled = [];
let stationsTravelledSecondTime = [];
let getOnLineIndex;
let getOffLineIndex;
let getOnStationIndex;
let getOffStationIndex;
let getOnLineName;
let fromStationsUnionSquare;
let toStationsUnionSquare;
let getOffLineName;

function planTrip(getOnLine, getOnStation, getOffLine, getOffStation) {
    for (let i = 0; i < trainStation.length; i++) {
        if (getOnLine === trainStation[i].line && getOffLine === trainStation[i].line) {
            getOnLineIndex = i; 
            getOffLineIndex = i;
            getOnStationIndex = trainStation[i].stations.indexOf(getOnStation);
            getOffStationIndex = trainStation[i].stations.indexOf(getOffStation);
            getOnLineName = getOnLine;
            travellingOnSameLine();
            break;
        } else if (getOnLine === trainStation[i].line && getOffLine !== trainStation[i].line) {
            getOnLineIndex = i; 
            getOnLineName = getOnLine;
            getOnStationIndex = trainStation[i].stations.indexOf(getOnStation);
            fromStationsUnionSquare = trainStation[i].stations.indexOf('Union Square');
            changingLines();
        } else if (getOnLine !== trainStation[i].line && getOffLine === trainStation[i].line){
            getOffLineIndex = i;
            getOffLineName = getOffLine;
            getOffStationIndex = trainStation[i].stations.indexOf(getOffStation);
            toStationsUnionSquare = trainStation[i].stations.indexOf('Union Square');
            }
    }};

function movingForward() {
    for (let i = getOnStationIndex+1; i < getOffStationIndex; i++) {
    stationsTravelled.push(trainStation[getOnLineIndex].stations[i]);
    }
    console.log(`"You must travel through the following stops on the ${getOnLineName} line: ${stationsTravelled.join(', ')}"`);
};

function movingBackwards() {
    for (let i = getOnStationIndex-1; i > getOffStationIndex; i--) {
        stationsTravelled.push(trainStation[getOnLineIndex].stations[i]);
    }
    console.log(`"You must travel through the following stops on the ${getOnLineName} line: ${stationsTravelled.join(', ')}"`);

};
function movingForwardSecondTime() {
    for (let i = getOffStationIndex+1; i < toStationsUnionSquare; i++) {
        stationsTravelledSecondTime.unshift(trainStation[getOffLineIndex].stations[i]);
    }
    console.log(`"You must travel through the following stops on the ${getOffLineName} line: ${stationsTravelledSecondTime.join(', ')}"`);
    console.log(`"${stationsTravelled.length + stationsTravelledSecondTime.length} stops in total."`);
};

function movingBackwardsSecondTime() {
    for (let i = getOffStationIndex-1; i > fromStationsUnionSquare; i--) {
        stationsTravelledSecondTime.unshift(trainStation[getOffLineIndex].stations[i]);
    }
    console.log(`"You must travel through the following stops on the ${getOffLineName} line: ${stationsTravelledSecondTime.join(', ')}"`);
    console.log(stationsTravelled);
};

function travellingOnSameLine() {
    if (getOnStationIndex < getOffStationIndex) {
        movingForward();
    } else {
        movingBackwards();
    }
    console.log(`"You must travel through the following stops on the ${getOnLineName} line: ${stationsTravelled.join(', ')}"`);
    };

function changingLines() {
    if (getOnStationIndex < fromStationsUnionSquare) {
        movingForward();
    } else {
        movingBackwards();
    }
    console.log(`"You must change at Union Square"`);
    secondLine();
};

function secondLine() {
    if (getOffStationIndex < toStationsUnionSquare) {
        movingForwardSecondTime();
    } else {
        movingBackwardsSecondTime();
    }
};

planTrip('L', '1st', 'N', '34th');
