rectangleA.js

const rectangleA = {
  length: 4,
  width: 4
};

function is_square(object) {
  if (object.length === object.width) {
    return true;
  }
  return false;
};

function area(object) {
  return object.length * object.width;
};

function perimeter(object) {
  return 2 * (object.length + object.width);
};