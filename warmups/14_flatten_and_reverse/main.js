const reverse = (array) => {
	let reversed = [];

	// for (let index = 0; index < array.length; index++) {
	// 	const element = array[index];
	// 	reversed.unshift(element)
	// };

	// for (let index = array.length - 1; index >= 0; index--) {
	// 	const element = array[index];
	// 	reversed.push(element)
	// };

	array.forEach(el => {
		reversed.unshift(el)
	});

	return array.reverse();
};

const inputArray = [1, 2, 3, 4]

console.log(reverse(inputArray));

const flatten = (arr) => {
	let flatten = [];

	for (let index = 0; index < arr.length; index++) {
		const element = arr[index];
		// if (element.constructor === Array) {
		// if (element instanceof Array) {
		if (Array.isArray(element)) {
			for (let j = 0; j < element.length; j++) {
				const nestedElement = element[j];
				flatten.push(nestedElement)
			}
		}		else {
			flatten.push(element)
		}
	}

	return flatten;

};


const inputArray = ["Hello", ["World", 42] ]

console.log(flatten(inputArray));

function flatten(array) {
	let newArray = [];
	array.forEach((ele) => {
			if (Array.isArray(ele)) {
					newArray = newArray.concat(flatten(ele));
			} else {
					newArray.push(ele);
			}
	});
	return newArray;

	// return array.flat();
}

const flatten = array => {
	array = array +'';
	return array.split(',')
};

const inputArray = ["Hello", ["World", [12, [24, 'hello']]] ]

console.log('flatten :', flatten(inputArray));
