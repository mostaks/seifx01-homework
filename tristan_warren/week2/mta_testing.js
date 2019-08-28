const nLine = [ 'Times Square', 'N34th', 'N28th', 'N23rd', 'Union Square', 'N8th' ];
const lLine = [ 'L8th', 'L6th', 'Union Square', 'L3rd', 'L1st' ];
const sixLine = [ '6Grand Central', '633rd', '628th', '623rd', 'Union Square', '6Astor Place' ];

function planTrip(onLine, onStop, offLine, offStop) {
	if (onLine !== offLine) {
		let line = getLineArray(onLine);
		let onPos = line.indexOf(onStop);
		let union = line.indexOf('Union Square');
		if (onPos > union) {
			line = line.reverse();
			onPos = line.indexOf(onStop);
			union = line.indexOf('Union Square');
		}

		output = [];

		editLine = line.slice(onPos, union);
		editLine.forEach((station) => {
			// console.log(station);
			output.push(station);
		});
		let cnt = output.length;
		console.log(`You must travel through the following stops on the N line: ${output}.`);
		console.log('Change at union');

		output = [];
		line = getLineArray(offLine);
		union = line.indexOf('Union Square');
		offPos = line.indexOf(offStop);

		if (offPos < union) {
			line = line.reverse();
			offPos = line.indexOf(offStop);
			union = line.indexOf('Union Square');
		}

		editLine = line.slice(union, offPos);
		editLine.forEach((station) => {
			// console.log(station);
			output.push(station);
		});
		console.log(`Your journey continues through the following stops: ${output}.`);
		cnt = cnt + output.length;
		console.log(`${cnt} stops in total.`);
		// let onPos = line.indexOf(onStop);
		// console.log(onPos);
		// let offPos = line.indexOf(offStop);
		// console.log(offPos)
		// if (onPos > offPos) {
		//     line = line.reverse();
		//     onPos = line.indexOf(onStop);
		//     offPos = line.indexOf(offStop);
		// }

		// for (let index = 0; index < line.length; index++) {
		//     const e = line[index];
		//     if (index > onPos && index < offPos) { console.log(e); }
	}

	// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
	// "Change at Union Square."
	// "Your journey continues through the following stops: 23rd, 28th, 33rd."
	// "7 stops in total."s
}

function getLineArray(subLine) {
	if (subLine === 'n') {
		return nLine;
	} else if (subLine === 'six') {
		return sixLine;
	} else if (subLine === 'l') {
		return lLine;
	}
}

// planTrip('N', 'Times Square', 'N', 'Union Square'); // This is only a suggested function name and signature.
planTrip('n', 'Times Square', 'six', '633rd'); // This is only a suggested function name and signature.

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
