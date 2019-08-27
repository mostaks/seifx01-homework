let rainbowColors = [];
rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green', 'blue', 'indigo', 'violet');


console.log(rainbowColors);
console.log('-------');
console.log(rainbowColors.length);
console.log('-------');
console.log(rainbowColors[1]);
console.log('-------');

function callTheLastItem() {
    console.log(rainbowColors[rainbowColors.length - 1]);
}
callTheLastItem();
console.log('-------');
console.log(rainbowColors.indexOf('blue'));
console.log('-------');

let twoColors = [];


var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
console.log(nums.slice(1,5));
console.log('-------');
nums.splice(2, 2);
nums.splice(3, 1);
console.log(nums);
console.log('-------');

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
console.log(arrOfArrs[0][0]);
console.log('-------');
console.log(arrOfArrs[1][2]);
console.log('-------');

for(i = 0; i <= arrOfArrs.length; i++) {
  console.log(arrOfArrs[1][i]);
};
console.log('-------');

var arrOfFiveCars = ['BMW', 'Audi', 'Ford', 'Subaru', 'Mitsubishi'];
for(i = 0; i < arrOfFiveCars.length; i++) {
  let numOfChoice = i + 1;
console.log(`My #` + numOfChoice + ` choice is ` + arrOfFiveCars[i]);
};
console.log('-------');







