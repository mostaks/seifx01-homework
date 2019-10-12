'use strict';

function isSquare(rectangle) {
  if (rectangle.length ===  rectangle.height) {
   return `It's a square`;
  } else {
    return `Not a square`;
  }
}