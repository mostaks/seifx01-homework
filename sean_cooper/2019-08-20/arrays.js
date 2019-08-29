let rainbowColors = [];

rainbowColors.push('orange');
rainbowColors.unshift('red');
rainbowColors.push('yellow');
rainbowColors.push('green','blue','indigo','violet');

rainbowColors = [];

rainbowColors.push('red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet');

console.log(rainbowColors.length);

console.log(rainbowColors[1]);

console.log(rainbowColors[rainbowColors.length - 1]);

console.log(rainbowColors.indexOf('blue'));

//splice() changes the original array whereas slice() doesn't but both of them returns array object.

let twoColors = [];

twoColors[1,3]; 

var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];

/*
function CountValues(arrayToCheck, valueToCheck) {
    let count = 0;
    let index = 0;
    while (index < arrayToCheck.length) {
        if (arrayToCheck[index] === valueToCheck) {
            count = count + 1;
        }
        index = index + 1;
    }
    return count;
}

function KillDoubles(arr) {
  for(let i=0; i<arr.length; i++) {
    if( CountValues(arr, i) > 1) {
    arr.splice(i,1,'Temp');
    }
  }
  for(let i=0; i<arr.length; i++) {
    if(arr[i] = 'Temp') {

    }
  } 
};
*/

nums.splice(2,1);
nums.splice(2,1);
nums.splice(3,1);

console.log(nums);

var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

console.log(arrOfArrs[0][0]);

console.log(arrOfArrs[arrOfArrs.length-1][arrOfArrs[arrOfArrs.length-1].length-1]);

function ListArrays(arr, indexArrInArr) {
  for(let i = 0; i < (arr[indexArrInArr].length); i++) {
    console.log( arr[indexArrInArr][i] )
  };
};

console.log(ListArrays(arrOfArrs, 1));

let top5 = ['W7', 'Mojave', 'W10', 'HighSierra', 'Ubuntu'];

function ListTop5 (arr) {
  for(let i=0; i<top5.length; i++) {
    console.log(`My #${i + 1} OS choice is ${top5[i]}.`)
  };
};

console.log(ListTop5(top5));

function ListTop5Hard (arr) {
  for(let i = 0; i < top5.length; i = i+1) {
    let i2 = i
    if(i2 = 0) {
      console.log(`My ${i}st OS choice is ${top5[i]}.`);
    }
    else if(i2 = 1) {
      console.log(`My ${i}nd OS choice is ${top5[i]}.`);
    }
    else if(i2 = 2) {
      console.log(`My ${i}rd OS choice is ${top5[i]}.`);
    }
    else {
      console.log(`My ${i}th OS choice is ${top5[i]}.`);
    }
  };
};

console.log(ListTop5Hard(top5));