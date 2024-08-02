/* 
  1.public 修饰的实在任何地方可见，公有的属性或方法，默认不写修饰符那么就是public
  2.private 修饰的时尽在同一类中可见，私有的属性或方法
  3.protected 修饰的是仅仅在类及其子类中可见，受保护的属性或方法
*/
class Person{
  public name: string = 'defaultName'
  public age: number = 18
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
  private eating(){
    console.log(this.name,'eating');
  }
  running() {
    // 只能在class内使用
    this.eating()
    console.log(this.name, 'running');
  }
  protected test(){

  }
}

class Student extends Person {
  constructor(name: string, age: number){
    super(name, age)
    this.test()// 继承来的protected修饰的 方法
  }
}

const p1 = new Person('yg',24)
p1.name = 'xixi'
p1.age = 18
p1.running()

// p1.eating() 报错，private定义的属性或方法只能在class内部使用