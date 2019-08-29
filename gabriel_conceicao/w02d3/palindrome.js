String.prototype.isPalindrome = function () {
    let j = this.length - 1;
    for (let i = 0; i < Math.ceil(this.length / 2); i++, j--) {
      if (this[i] !== this[j]) {
        return false;
      }
    }
    return true;
  }
  ​
  ​
  let testString = "racecar";
  console.log(testString.isPalindrome());