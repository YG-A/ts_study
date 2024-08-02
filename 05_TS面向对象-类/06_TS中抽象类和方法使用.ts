// 抽象类
abstract class Shape{

  // 抽象方法，不能写函数体
  abstract getArea():number
}

class Rectangle extends Shape {
  constructor(public width: number, public height: number){
    super()
  }

  // 实现getArea
  getArea(){
    return this.width * this.height
  }
}

class Circle extends Shape {
  constructor(public radius: number) { 
    super()
  }

  // 实现getArea
  getArea() {
    return Math.PI * Math.pow(this.radius,2)
  }
}



function calculateArea(shape: Shape){
  return shape.getArea()
}

const c1 = new Circle(5)
calculateArea(c1)