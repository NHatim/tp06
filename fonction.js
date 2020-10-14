function Shape(name, sides, sideLength) {
  this.name = name;
  this.sides = sides;
  this.sideLength = sideLength;
}


Shape.prototype.calcperimeter = (obj) => {

  return obj.sideLength*obj.sides;

}


/* TEST
const square = new Shape('square', 4,5);
const triangle = new Shape('triangle', 3,3);
console.log(Shape.prototype.calcperimeter(square));
console.log(Shape.prototype.calcperimeter(triangle));
*/
