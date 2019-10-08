// Input data
var ws = 'listen';
var ls = [ 'enlists', 'google', 'inlets', 'banana' ];

function anagram(word, list) {
	let splitWord = word.split('').sort().join();
	let output;
	list.forEach((ele) => {
		let comp = ele.split('').sort().join();

		if (splitWord === comp) {
			output = ele;
		}
	});

	return output;
}

let answer = anagram(ws, ls);

console.log(answer);
