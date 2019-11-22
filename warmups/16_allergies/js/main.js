const scorecard = {
	1: "eggs",
	2: "peanuts",
	4: "shellfish",
	8: "strawberries",
	16: "tomatoes",
	32: "chocolate",
	64: "pollen",
	128: "cats"
};

const getList = score => {
	const keys = Object.keys(scorecard).map(Number).reverse();
	console.log('keys', keys);

	let allergies = [];

	for (key of keys) {
		if (score >= key) {
			allergies.push(scorecard[key]);
			score -= key;
		};
	};

	return allergies;
};

const oxfordize = list => {
	return list.join(', ').replace(/, ([^,]*)$/, ' but most importantly you are allergic to $1')
}

const diagnosis = score => {
	const allergyList = getList(score);

	return allergyList.length > 0 ? `You are allergic to ${oxfordize(allergyList)}` : "You are perfectly healthy";
}

console.log(diagnosis(34))
console.log(diagnosis(0))
console.log(diagnosis(236))