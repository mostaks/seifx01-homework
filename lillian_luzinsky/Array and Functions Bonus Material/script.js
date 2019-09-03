
let num1 = 88;
let num2 = 999;
let num3 = 1;

function maxOfTwoNumbers (num1, num2){
    if(num1 > num2){
        console.log(num1);
    } else{
        console.log(num2);
    }
};

maxOfTwoNumbers (num1, num2);


function maxOfThree (num1, num2, num3){
    if(num1 > num2 && num3){
        console.log(num1);
    } else if (num2 > num1 && num3) {
        console.log(num2);
    } else {
        console.log(num3);
    }
};

maxOfThree (num1, num2, num3);



let vowel = 'a';

function guessCharacter(vowel){
    if(vowel === 'a' || 'e' || 'i' || 'o' || 'u'){
        console.log(true);
    } else {
        console.log(false);
    }
};

guessCharacter();


/*Define a function sumArray and a function multiplyArray that sums and multiplies 
(respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) 
should return 10, and multiplyArray([1,2,3,4]) should return 24.

const numbers = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(numbers.reduce(reducer));
// expected output: 10

function multiplyArray (numbers){
    var sum = 1;
    for (var i=0; i<numbers.length; i++){
        sum = sum + numbers[i];
    }console.log(sum);
};// stuck!!!*/


