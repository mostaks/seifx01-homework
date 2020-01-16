const cleanNumber = num => {
	let cleanNum = num.replace(/[^0-9]+/g, "");
	return (cleanNum.length === 11 && cleanNum[0] === '1') ? cleanNum.substr(1) : cleanNum;
}

const isValid = num => {
	let cleaned = cleanNumber(num);
	return cleaned.length !== 10 ? '0000000000' : cleaned;
}

const getFormattedNumber = num => {
	let validNum = isValid(num);
	console.log('validNum', validNum);
	const areaCode = validNum.substr(0, 3);
	const exchangeCode = validNum.substr(3, 3)
	const remaining = validNum.substr(6);
	const str = 'can you help me?';
	return `(${areaCode}) ${exchangeCode}-${remaining}`;
}

const num1 = "132345s673w#8mm";

console.log(getFormattedNumber(num1));