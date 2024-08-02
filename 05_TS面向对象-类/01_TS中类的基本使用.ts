// ts定义class时，属性必须在class中定义出来，不能在构造器中直接赋值
class Person{
  name: string = 'defaultName'
  age: number = 18
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  eating(){
    console.log(this.name,'eating');
  }
  running() {
    console.log(this.name, 'running');
  }
}

const p1 = new Person('yg',24)