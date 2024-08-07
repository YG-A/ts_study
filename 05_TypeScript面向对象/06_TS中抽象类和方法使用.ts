abstract class Shape {
  abstract getArea() : number
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number){
    super()
  }
  getArea(): number {
    return this.width * this.height
  }
}
class Circle extends Shape {
  constructor(public radius: number){
    super()
  }
  getArea(): number {
    return Math.PI * Math.pow(this.radius,2)
  }
}

function getArea(shape: Shape) {
  return shape.getArea()
}
console.log(getArea(new Rectangle(10,10)),'矩形');
console.log(getArea(new Circle(10)),'圆形');
