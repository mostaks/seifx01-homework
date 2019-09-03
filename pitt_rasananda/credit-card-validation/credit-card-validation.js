
// Condition
// Number must be 16 digits, all of them must be numbers
// You must have at least two different digits represented (all of the digits cannot be the same)
// The final digit must be even
// The sum of all the digits must be greater than 16

function validateCreditCard(creditCard) {
    // remove all -
    let creditCardWithoutDash = creditCard.replace(/\-/g,''); 
    // check if credit card only contain #
    let isNumber = /^\d+$/.test(creditCardWithoutDash);
    // split string into array
    let strArr = creditCardWithoutDash.split('');
    // map string back to number
    let numArr = strArr.map(Number);
    // remove duplicate number
    let uniqueSet = new Set(numArr);
    let sumOf = 0;
    //initilised card object
    let card = {
        valid: false,
        number: creditCard,
        error: ''
    }

    // validate
    if (isNumber === true) {
        if(numArr.length === 16) {
            for (i=0; i< numArr.length; i++) {
                sumOf += numArr[i];
            }
            if(sumOf > 16) {
                if(numArr[numArr.length - 1]%2 === 0) {
                    if(uniqueSet.size < 2) {                       
                        card.error = `Must have at least 2 unique number`
                    } else {
                        card.valid = true;
                    }
                } else {
                    card.error = `Last digit must be even number.`
                }
            } else {
                card.error = `Sum of all number must be more than 16.`
            }
        } else {
            card.error = `The number must be 16 digits.`
        }
    } else {
        card.error = `input must be all numbers.`
    }
    return card;
}
console.log(validateCreditCard('9999-9999-8888-0000')); //valid
console.log(validateCreditCard('6666-6666-6666-1666')); //valid
console.log(validateCreditCard('a923-3211-9c01-1112'));
console.log(validateCreditCard('4444-4444-4444-4444'));
console.log(validateCreditCard('1111-1111-1111-1110'));
console.log(validateCreditCard('6666-6666-6666-6661'));
