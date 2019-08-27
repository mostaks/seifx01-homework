//Geometry Function Lab
//Part 1, Rectangle
//Given the following a rectangle object like the one below, write the following functions:
//isSquare - Returns whether the rectangle is a square or not
//area - Returns the area of the rectangle
//perimeter - Returns the perimeter of the rectangle

const rectangleA = {
  length: 4,
  width: 4, 
  isSquare: function () 
  {
    if (this.length * this.width === Math.pow(this.width, 2))
    {
      return ('The rectangleA is a square');
    } else {
      return ('The rectangleA is not a square');
    };
  },
  area: function() 
  {
    return this.length * this.width;
  },
  perimeter: function() 
  {
    return 2 * (this.length + this.width);
  }
};
console.log(rectangleA.isSquare());
console.log(rectangleA.area());
console.log(rectangleA.perimeter());

console.log(`-------------------------------`);

//Part 2, Triangle
//Given the following a triangle object like the one below, write the following functions:

//isEquilateral - Returns whether the triangle is equilateral or not
//isIsosceles - Returns whether the triangle is isosceles or not
//area - Returns the area of the Triangle
//isObtuse - Returns whether the triangle is obtuse or not

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4,
  isEquilateral: function () {
    if (this.sideA === this.sideB && this.sideA === this.sideC)
    {
      return ('The triangleA is an equilateral');
    } else {
      return ('The triangleA is not an equilateral');
    };
  },
  isIsosceles: function () {
    if (this.sideA === this.sideB || this.sideB === this.sideC)
     {
      return ('The triangleA is an isosceles');
    } else {
      return ('The triangleA is not an isosceles');
    };
  },
  triArea: function(sideA, sideB, sideC) {
    let s = (sideA + sideB + sideC)/2;
    let a = Math.sqrt(s*((s - sideA)*(s - sideB)*(s -sideC)));
    return a;
},
isObtuse: function () {
  if (Math.sqrt(this.sideA, 2) + Math.sqrt(this.sideB, 2) < Math.sqrt(this.sideC)) 
  {
      return ('The triangleA is an obtuse');
    } else {
      return ('The triangleA is not an obtuse');
    };
}
};
console.log(triangleA.isEquilateral());
console.log(triangleA.isIsosceles());
console.log(triangleA.triArea(3, 4, 4));
console.log(triangleA.isObtuse());

console.log(`--------------------------------`);
//The Cash Register
//Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example

const cartForParty = {  
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

Object.prototype.sum = function (cartForParty) {
    var sum = 0
    for ( var i = 0; i < Object.values(this).length; i++) {
        sum = sum + Number(Object.values(this)[i]);
    }
    console.log(sum);
}
cartForParty.sum();

//cashRegister(cartForParty)); // 60.55

//Geometry Function Lab
//Part 1, Rectangle
//Given the following a rectangle object like the one below, write the following functions:
//isSquare - Returns whether the rectangle is a square or not
//area - Returns the area of the rectangle
//perimeter - Returns the perimeter of the rectangle

const rectangleA = {
    length: 4,
    width: 4, 
    isSquare: function () 
    {
      if (this.length * this.width === Math.pow(this.width, 2))
      {
        return ('The rectangleA is a square');
      } else {
        return ('The rectangleA is not a square');
      };
    },
    area: function() 
    {
      return this.length * this.width;
    },
    perimeter: function() 
    {
      return 2 * (this.length + this.width);
    }
  };
  console.log(rectangleA.isSquare());
  console.log(rectangleA.area());
  console.log(rectangleA.perimeter());
  
  console.log(`-------------------------------`);
  
  //Part 2, Triangle
  //Given the following a triangle object like the one below, write the following functions:
  
  //isEquilateral - Returns whether the triangle is equilateral or not
  //isIsosceles - Returns whether the triangle is isosceles or not
  //area - Returns the area of the Triangle
  //isObtuse - Returns whether the triangle is obtuse or not
  
  const triangleA = {
    sideA: 3,
    sideB: 4,
    sideC: 4,
    isEquilateral: function () {
      if (this.sideA === this.sideB && this.sideA === this.sideC)
      {
        return ('The triangleA is an equilateral');
      } else {
        return ('The triangleA is not an equilateral');
      };
    },
    isIsosceles: function () {
      if (this.sideA === this.sideB || this.sideB === this.sideC)
       {
        return ('The triangleA is an isosceles');
      } else {
        return ('The triangleA is not an isosceles');
      };
    },
    triArea: function(sideA, sideB, sideC) {
      let s = (sideA + sideB + sideC)/2;
      let a = Math.sqrt(s*((s - sideA)*(s - sideB)*(s -sideC)));
      return a;
  },
  isObtuse: function () {
    if (Math.sqrt(this.sideA, 2) + Math.sqrt(this.sideB, 2) < Math.sqrt(this.sideC)) 
    {
        return ('The triangleA is an obtuse');
      } else {
        return ('The triangleA is not an obtuse');
      };
  }
  };
  console.log(triangleA.isEquilateral());
  console.log(triangleA.isIsosceles());
  console.log(triangleA.triArea(3, 4, 4));
  console.log(triangleA.isObtuse());
  
  console.log(`--------------------------------`);
  //The Cash Register
  //Write a function called cashRegister that takes a shopping cart object. The object contains item names and prices (itemName: itemPrice). The function should return the total price of the shopping cart. Example
  
  const cartForParty = {  
    banana: "1.25",
    handkerchief: ".99",
    Tshirt: "25.01",
    apple: "0.60",
    nalgene: "10.34",
    proteinShake: "22.36"
  };
  
  Object.prototype.sum = function (cartForParty) {
      var sum = 0
      for ( var i = 0; i < Object.values(this).length; i++) {
          sum = sum + Number(Object.values(this)[i]);
      }
      console.log(sum);
  }
  cartForParty.sum();
  
  //Credit Card Validation
  function removeMinusChar (number) {
    let string = '';
    for (char of number) {
        if (char !== '-') {
            string = string + char;
        }
    }
    return string
}

function validateCreditNumber(number) {
    origionalNumber = number;
    errorMessage = '';
    number = removeMinusChar(number);
    if (number.length !== 16) {
        errorMessage = errorMessage + `length is not $(number.length}`;
    }
    for (char of number) {
        if (!Number(char) && Number(char)!==0) {
            errorMessage = errorMessage + `${char} is not a digit`;
        }
    }
    uniqueNumber=[];
    for (char of number) {
        let findMatch = false;
        for (uniqueChar of uniqueNumber) {
            if (char === uniqueChar){
                findMatch = true
                break
            }
        }
        if (!findMatch) {
            uniqueNumber.push(char)
        }
    }
    if (uniqueNumber.length < 2) {
        errorMessage = errorMessage + `${uniqueNumber.length} is not enough unique digits`
    }
    sum = 0;
    for (char of number) {
        sum = sum + Number(char);
    }
    if (sum <= 16) {
        errorMessage = errorMessage + `sum of the numbers is ${sum}, less then 16`;
    }
    if (Number(number[number.length-1])%2 !== 0) {
        errorMessage = errorMessage + `the last digit ${number[number.length]} is not a even number`;
    }
    if (errorMessage === '') {
        return {
            valid: true,
            number: origionalNumber
        }
    } else {
        return {
            valid: false,
            number: origionalNumber,
            error: errorMessage
        }
    }
}

console.log(validateCreditNumber('a923-3211-9c01-1112'))
console.log(validateCreditNumber('4444-4444-4444-4444'))
console.log(validateCreditNumber('1111-1111-1111-1110'))
console.log(validateCreditNumber('6666-6666-6666-6661'))
console.log(validateCreditNumber('9999-9999-8888-0000'))

