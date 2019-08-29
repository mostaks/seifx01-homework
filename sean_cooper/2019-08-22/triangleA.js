triangleA.js

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

function is_equilateral (object) {
  if(object.sideA === object.sideB) {
    return true;
  };
  if(object.sideB === object.sideC) {
    return true;
  };
  if(object.sideC === object.sideA) {
    return true;
  };
  return false;
};

function is_isosceles (object) {
  if(object.sideA === object.sideB === object.sideC) {
    return true;
  };
  return false;
};

function area (object) {
  let s = (object.sideA + object.sideB + object.sideC)/2;
  return Math.sqrt(s * (s - object.sideA) * (s - object.sideB) * (s - object.sideC));
};

function is_obtuse (object) {
  let s = object.sideA;
  if(object.sideB > object.sideA) {
    s = object.sideB;
  };
  if(object.sideC > object.sideB) {
    s = object.sideC;
  };
  if((s * s) > ((object.sideA * object.sideA) + (object.sideB * object.sideB) + (object.sideC * object.sideC) - (s * s))) {
    return true;
  }
  return false;
};