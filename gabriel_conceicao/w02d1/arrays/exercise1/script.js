

let rainbowColors = [];

rainbowColors.push('orange');

rainbowColors.unshift('red');

rainbowColors.push('yellow');

rainbowColors.push('blue', 'indigo', 'violet');

console.log(rainbowColors.length);

console.log(rainbowColors[1]);

console.log(rainbowColors[rainbowColors.length-1]);

console.log(rainbowColors.indexOf('blue'));

console.log(rainbowColors);

console.log('-----');
let twoColors = [];
rainbowColors.slice(1,3);

console.log(twoColors);

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

nums.splice(2,3);
console.log(nums);

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);

console.log(arrOfArrs[1][arrOfArrs[1].length-1]);

for(let i = 0; i < arrOfArrs[1].length; i++){

   console.log(arrOfArrs[1][i]);

}

let rivers = ['liffey', 'seine', 'thames', 'danube', 'parramatta'];

for(let i = 0; i < rivers.length; i++){

   console.log(`My #${i+1} choice is ${rivers[i]}`);

}

for(let i = 0; i <= rivers.length; i++){
 if (i===1) {
   console.log(`My ${i}st choice is ${rivers[i]}`);
 }
 else if (i===2) {
   console.log(`My ${i}nd choice is ${rivers[i]}`);
 }
  else if (i===3) {
   console.log(`My ${i}rd choice is ${rivers[i]}`);
 }
  else if (i===4 || i===5) {
   console.log(`My ${i}th choice is ${rivers[i]}`);
 }
};