class Shape {
  constructor(name, sides, sideLength) {

    this.name = name;
    this.sides = sides;
    this.sideLength = sideLength

  }

  calcperimeter(){
    return this.sides*this.sideLength;
  }

}

const square = new Shape('square', 4,5);
const triangle = new Shape('triangle', 3,3);

console.log(square.calcperimeter());
console.log(triangle.calcperimeter());
