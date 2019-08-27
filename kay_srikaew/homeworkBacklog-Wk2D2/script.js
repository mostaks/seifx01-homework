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
