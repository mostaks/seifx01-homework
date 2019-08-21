// Working with Arrays
// Starting with an empty array called rainbowColors:
rainbowColors = [];

// Add "orange" to the end of the array
rainbowColors.push("orange");

// Add "red" to the start of the array
rainbowColors.unshift("red");

// Add "yellow" to the end
rainbowColors.push("yellow");

// Add "green", "blue", "indigo", and "violet" to the end of the array
// Try and do this using one method
rainbowColors.push("green","blue","indigo","violet");

// Log out the length of the array
console.log(rainbowColors.length);

// Log out the second item
console.log(rainbowColors[1]);

// Log out the last item (make this flexible/dynamic!)
console.log(rainbowColors[rainbowColors.length - 1]);

// Log out the index of the string "blue"
console.log(rainbowColors.indexOf('blue'));

// Bonus: Find out the difference between .slice and .splice
// Create an array called twoColors using one method - don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
twoColors = [rainbowColors.slice(1,3)];
console.log(twoColors);

// Starting with this array var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];, remove the duplicates destructively using slice or splice (whichever one is appropriate)
var nums = [0, 1, 2, 2, 2, 3, 3, 4, 5];
nums.splice(2,3);
nums.splice(2,2);
console.log(nums);

// Bonus: Work with arrays of arrays
// Starting with this array var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];
var arrOfArrs = [["inner array first item", "inner array second item"], ["first", "second", "third"]];

// Access "inner array first item" and print it out"
console.log(arrOfArrs[0][0]);

// Print "third" by using a dynamic index
console.log(arrOfArrs[1][arrOfArrs.length]);

// Bonus Bonus: Loop through the second inner array! Print out first, then second, then third
for(i=0; i< arrOfArrs[1].length; i++) {
    console.log(arrOfArrs[1][i]);
}

// Your top choices
// Create an array to hold your top five choices of something (dogs, books, presidents, whatever). If you choose movies, the right top choice is "Satantango".

food = ["sushi","poke bowl","steak","toasty","korean bbq"];

// For each choice, log to the screen a string like: "My #1 choice is blue."
for (i=0; i<foods.length; i++) {
    console.log(`My #${i+1} choice is ${foods[i]}`);
  }

// Bonus: Change it to log "My 1st choice, "My 2nd choice", "My 3rd choice", picking the right suffix for the number based on what it is.

for (i=0; i<foods.length; i++) {
    if(i === 0) {
      console.log(`My #${i+1}st choice is ${foods[i]}`);
    } else if (i ===1) {
      console.log(`My #${i+1}nd choice is ${foods[i]}`);
    } else if (i ===2) {
      console.log(`My #${i+1}rd choice is ${foods[i]}`);
    } else {
    console.log(`My #${i+1}th choice is ${foods[i]}`);
    }
  }

//   Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.
function maxOfTwoNumbers(num1,num2) {
    if(num1 != num2 && num1 > num2) {
      return num1;
    } else if (num1 === num2) {
      return "the two numbers are equal";
    } else {
      return num2;
    }
  }

  console.log(maxOfTwoNumbers(8,3));
  console.log(maxOfTwoNumbers(3,3));
  console.log(maxOfTwoNumbers(1,3));

//   Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

function maxOfThree(num1,num2,num3) {
    if(num1 > num2 && num1 > num3) {
      return num1;
    } else if (num2 > num1 && num2 > num3) {
      return num2;
    } else if (num3 > num1 && num3 > num2) {
      return num3;
    } else {
      return "two highest number or all three numbers are equal"
    }
  }

//   Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

function isVowel(i) {
    if (i === "a" || i === "e" || i === "i" || i === "o" || i ==="u") {
      return `${i} is a vowel`
    } else {
      return `${i} is not a vowel`
    }
  }
  
  console.log(isVowel("i"));
  console.log(isVowel("b"));

//   Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.

function sumArray(arr) {
    var sum = 0;
      for (i = 0; i < arr.length; i++) {
        sum += arr[i]; 
      }
    return sum;
  }

  console.log(sumArray([1,2,3,4]));

  function multiplyArray(arr){
    var product = 1;
      for (i = 0; i < arr.length; i++) {
        product *= arr[i]; 
      }
      return product;
  }
  
  console.log(multiplyArray([1,2,3,4]));

//   Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".

function reverseString(str) {
    var reverseString = "";
    for (i = str.length -1; i>=0; i--) {
      reverseString += str[i];
    }
    return reverseString;
  }
  
  console.log(reverseString("jag testar"));

//   Write a function findLongestWord that takes an array of words and returns the length of the longest one.

function findLongestWord(arr) {
    var tempWordLength = 0;
    var longestWord;
    for (i=0; i < arr.length; i++) {
      if(arr[i].length > tempWordLength) {
        var tempWordLength = arr[i].length;
        longestWord = arr[i];
      }
    }
    return longestWord;
  }

  console.log(findLongestWord(["fox", "eagle", "elephant"]));

// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

function filterLongWords(arr,num) {
    let longWords = [];
    for (i=0; i < arr.length; i++) {
        if (num < arr[i].length) {
            longWords.push(arr[i]);
        }
    }
    return longWords;
}

console.log(filterLongWords(["cat","bird","tiger","panda"],4));