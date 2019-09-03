//Cr. solution derived from WDI12_Homework/AlexLee/week_01/MTA-Lab/js/trains.js 
var lines = {
	N: [ "Times Square", "34th", "28th N", "23rd N", "Union Square", "8th N"],
	L: ["8th L", "6th", "Union Square", "3rd", "1st"],
	"6" : ["Grand Central", "33rd", "28th 6", "23rd 6", "Union Square",
"Astor Place"]
};

var intersectStation = "Union Square";

var listTrip1 = function(lineName, line, station) {
	var count = 0;
	var intersect = line.indexOf(intersectStation);
	var tripMessage = "Travel through the following stops on the " + lineName + " line: ";

	// if station 1 is after union square
	if (station > intersect) { 
		// start listing from one stop after station 1
		for (var i = station - 1; i >= intersect; i--) {
			if (i !== intersect) {
				tripMessage += line[i] + ", ";
			}
			else {
				tripMessage += line[i] + ".";
			}
			count++;
		}
	}
// else if station 1 is before union square
else {
    // start listing from one stop after station 1
    for (var i = station + 1; i <= intersect; i++) {
        if (i !== intersect) {
            tripMessage += line[i] + ", ";
        }
        else {
            tripMessage += line[i] + ".";
        }
        count++;
    }
}
console.log(tripMessage);
return count;
}

var listTrip2 = function(lineName, line, station) {
var count = 0;
var intersect= line.indexOf(intersectStation);
var tripMessage = "Continue through the following stops on the " + lineName + " line: "

// if station 2 is after union square
if (station > intersect) {
    // start listing from one stop after union station
    for (var i = intersect + 1; i <= station; i++) {
        if (i !== station) {
            tripMessage += line[i] + ", ";
        }
        else {
            tripMessage += line[i] + ".";
        }
        count++;
    }
}

// else if station 2 is before union square
else {
    // start lisiting from one stop after union station
    for (var i = intersect - 1; i >= station; i--) {
        if (i !== station) {
            tripMessage += line[i] + ", ";
        }
        else {
            tripMessage += line[i] + ".";
        }
        count++;
    }
}

console.log(tripMessage);
return count;
}

var listTripSingleLine = function(lineName, line, stationOne, stationTwo) {
var count = 0;
var tripMessage = "Travel through the following stops on the " + lineName + " line: ";

// if station 2 is after station 1
if (stationTwo > stationOne) {
    // start listing from one stop after station 1
    for (var i = stationOne + 1; i <= stationTwo; i++) {
        if (i !== stationTwo) {
            tripMessage += line[i] + ", ";
        }
        else {
            tripMessage += line[i] + ".";
        }
        count++;
    }
}

// else if station 2 is before station 1
else {
    // start lisiting from one stop after station 1
    for (var i = stationOne - 1; i >= stationTwo; i--) {
        if (i !== stationTwo) {
            tripMessage += line[i] + ", ";
        }
        else {
            tripMessage += line[i] + ".";
        }
        count++;
    }
}

console.log(tripMessage);
return count;
}

var planTrip = function(lineOne, stationOne, lineTwo, stationTwo) {
var line1 = lineOne.toUpperCase();
var line2 = lineTwo.toUpperCase();

var l1 = lines[line1] // same as var l2 = line.N except using string as index/key
var l2 = lines[line2]; // same as var l2 = line.N except uses string as index/key

if ((l1 === undefined || l1 === null) || (l2 === undefined || l2 === null)) {
    console.log("Line(s) " + lineOne + " and/or " + lineTwo + " do not exist");
}
else {
    var s1 = l1.indexOf(stationOne); // station1 position/index in line1 array
    var s2 = l2.indexOf(stationTwo);// station2 position/index in line2 array

    var count = 0;

    if (lineOne !== lineTwo && stationOne !== stationTwo) {

        count += listTrip1(lineOne, l1, s1);

        if (line1 === line2) {
            console.log(intersectStation);
            
        }
        else {
            console.log("Change at " + intersectStation);
        }

        count += listTrip2(lineTwo, l2, s2);

        console.log(count + " stops travelled.");

    }

    else if (lineOne === lineTwo && stationOne !== stationTwo) {
        count += listTripSingleLine(lineOne, l1, s1, s2);
        console.log(count + " stops travelled.");
    }

    else {
        console.log("You have entered the same start and destination. Try again");
    }
}

/*var listTrip = function(line, station) {
	var intersect = line.indexOf(intersectStation);
	if (station < intersect) {
		var l = line.slice(station, intersect);
	}
	
	else {
		var l = line.slice(intersect, station + 1);
		//l.shift();
	}
	for (var i = 0; i < l.length; i++) {
        console.log(l[i]);
    };
}*/
