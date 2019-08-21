//Array Exercises
let rainbowColors = [];

rainbowColors.push('orange'); 
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet');

//Answer1
console.log(rainbowColors.length);
//Answer2
console.log(rainbowColors[1]);
//Answer3
console.log(rainbowColors[6]);

//Answer4
function ArrayIndexOf(arr, value) {
   for(let i=0; i<arr.length; i++){
       if(arr[i] === value)
           return i;
   }
   return -1;
}

ArrayIndexOf(rainbowColors, 'blue');

//Answer5
let twoColors = [];
console.log(rainbowColors.slice(1, 3));

//Answer6
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
// at index 3, remove 3 item, don’t insert anything
nums.splice(3, 3);
console.log(nums);

//Answer7
let hobbies = ['hiking', 'gym', 'beer', 'movie', 'shopping'];
for (let i=0; i<hobbies.length; i++) {
    console.log('My ${i+1} choice is ${hobbies[i]}.');
}