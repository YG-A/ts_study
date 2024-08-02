class Person {
  // 声明成员属性
  name: string = 'ygg'
  age: number = 18
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

const p1 = new Person('张三', 18)

/* 
  在ts定义类时，在类中使用的this.xx属性, 必须要声明
  
*/