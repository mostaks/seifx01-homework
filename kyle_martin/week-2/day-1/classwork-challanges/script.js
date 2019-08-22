let rainbowColors = [];

rainbowColors.unshift("red");
rainbowColors.push("yellow")
rainbowColors.push("green","blue","indigo","violet");


console.log(rainbowColors.length)
console.log(rainbowColors[1])
console.log(rainbowColors[rainbowColors.length -1]);
console.log(rainbowColors.indexOf('blue'));
console.log(rainbowColors)

//bonus 
let twoColors = rainbowColors.slice(1, 3);
 console.log(twoColors);

//bonus 
let nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
// remove manually with .splice
// nums.splice(3, 3)
//
// remove with logic.
let newNums = [];
for (let i = 0; i < nums.length; i ++) {
// if newNums indexOf nums[i] is equal to -1. -1 the number dosent currently exist in the array. This statement is saying if the number isn't currently in the array then push it in.
  if(newNums.indexOf(nums[i]) === -1){
    newNums.push(nums[i]);
  }
} 
console.log(newNums); 
//
// remove duplcates with a function. 
function removeDuplicates(arr){
  let arrNew = [];
  for (let i = 0; i < arr.length; i++){
    if (arrNew.indexOf(arr[i]) === -1){
      arrNew.push(arr[i])
    }
  }
  return arrNew
}
console.log(removeDuplicates(nums));
//

// Bonus
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third", "forth"]];
//1 Access "inner array first item" and print it out"
console.log(arrOfArrs[0][0]);
//2 Print "third" by using a dynamic index

//3 Bonus Bonus: Loop through the second inner array! Print out first, then second, then third