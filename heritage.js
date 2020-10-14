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
class Square extends Shape {
  constructor(sidesLength){
  super(sidesLength)
  this.name = 'square';
  this.sides = 4;
  this.sideLength = sidesLength;
  }
  calcArea(){
    return this.sideLength*this.sideLength;
  }
}

const square = new Square(5);
console.log(square.name);
console.log(square.calcperimeter());
console.log(square.calcArea());
