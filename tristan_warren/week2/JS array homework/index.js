// Arrary and Functions Bonus Material
// 1
function maxOfTwoNumbers(num1, num2) {
	if (num1 > num2) {
		return num1;
	} else if (num2 > num1) {
		return num2;
	} else {
		return 'equal';
	}
}

console.log(maxOfTwoNumbers(1, 2));
