

let rainbowColors = [];

rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push("green", "blue", "indigo", "violet" );

console.log(rainbowColors.length);
console.log(rainbowColors[1])

var lastItem = rainbowColors[rainbowColors.length-1];
console.log(lastItem);

  function CountValues(arr, value)
 {
   let count = 0;
   for (let i=0; i<arr.length; i++){
     if( arr[i] === value)
       count = i;
     
   }

    return count;
    
 }

console.log(CountValues(rainbowColors, 'blue')); //2




var twoColors = [rainbowColors.slice(0,1),rainbowColors.slice(3,7)];
 console.log(twoColors);


var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,2);
console.log(nums)
nums.splice(3,1)
console.log(nums)

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);


//var lastItem2 = ((arrOfArrs[1]).length)-1];
//console.log(lastItem2);

