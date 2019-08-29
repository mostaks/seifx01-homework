const nLine = [ 'Times Square', 'N34th', 'N28th', 'N23rd', 'Union Square', 'N8th' ];
const lLine = [ 'L8th', 'L6th', 'Union Square', 'L3rd', 'L1st' ];
const sixLine = [ '6Grand Central', '633rd', '628th', '623rd', 'Union Square', '6Astor Place' ];

function planTrip(onLine, onStop, offLine, offStop) {
	if (onLine === 'N' && offLine === 'N') {
		let line = nLine;
		let onPos = line.indexOf(onStop);
		let offPos = line.indexOf(offStop);
		if (onPos > offPos) {
			line = line.reverse();
			onPos = line.indexOf(onStop);
			offPos = line.indexOf(offStop);
		}
		arrForLog = [];
		for (let index = 0; index < line.length; index++) {
			const e = line[index];
			if (index > onPos && index < offPos) {
				arrForLog.push(e);
			}
		}

		// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
		// "Change at Union Square."
		// "Your journey continues through the following stops: 23rd, 28th, 33rd."
		// "7 stops in total."s
	}
}

// planTrip('N', 'Times Square', 'N', 'Union Square'); // This is only a suggested function name and signature.
planTrip('N', 'Union Square', 'N', 'Times Square'); // This is only a suggested function name and signature.

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."s

// There are 3 subway lines:
// The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
// The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
// The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
//     All 3 subway lines intersect at Union Square, but there are no other intersection points. (For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line, so you'll have to differentiate this when you name your stops in the arrays.
//     Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at
