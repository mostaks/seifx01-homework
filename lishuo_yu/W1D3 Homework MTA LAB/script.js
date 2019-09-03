//MTA Lab

const metroLines = {
	N : ['Times Square', '34th', '28th', '23th', 'Union Square', '8th'],
	L : ['8th', '6th', 'Union Square', '3rd', '1st'],
	6 : ['Grand Central', '33rd', '28th', '23rd', 'Union Square', 'Astor Place']
}

const indexOfStop = (line, stop) => {
	return metroLines[line].indexOf(stop)
}

const slicedStartLine = (line, stop) => {
	return indexOfStop(line, stop) <= indexOfStop(line, 'Union Square') ? 
	metroLines[line].slice(indexOfStop(line, stop)+1, indexOfStop(line, 'Union Square')+1):
	metroLines[line].slice(indexOfStop(line, 'Union Square') , indexOfStop(line, stop)).reverse()
}

const slicedFinishLine  = (line, stop) => {
	return indexOfStop(line, stop) <= indexOfStop(line, 'Union Square') ? 
	metroLines[line].slice(indexOfStop(line, stop), indexOfStop(line, 'Union Square')).reverse():
	metroLines[line].slice(indexOfStop(line, 'Union Square')+1 , indexOfStop(line, stop)+1)
}

const planTrip = (startLine, startStop, finishLine, finishStop) => {

	let startLineStops = slicedStartLine(startLine,startStop)

	let finishLineStops = slicedFinishLine(finishLine,finishStop)

	let totalStops = startLineStops.concat(finishLineStops).length

	console.log(`planTrip(${startLine}, ${startStop}, ${finishLine}, ${finishStop}).`);

	console.log(`You must travel through the following stops on the ${startLine} line: ${startLineStops.join(' ')}.`)

	startLine === finishLine ? console.log('No need to change line') : console.log(`Change at Union Square.`)

	console.log(`Your journey continues through the following stops: ${finishLineStops.join(' ')}.`);

	console.log(`${totalStops} stops in total.`);

	console.log('-----------------------------------------------------------------------------------------');
}

planTrip('N','Times Square', '6', '33rd')
planTrip('L','1st', '6', '33rd')
planTrip('L','8th', '6', '33rd')
planTrip('L','1st', 'N', '8th')
planTrip('N','8th', 'N', '34th')
planTrip('L','1st', 'N', '34th')
planTrip('L','8th', 'N', '34th')
