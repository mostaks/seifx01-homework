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

  