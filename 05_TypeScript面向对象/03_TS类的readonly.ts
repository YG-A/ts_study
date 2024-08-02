class Person {
  public readonly name: string
  age: number

  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}

const p = new Person('张三', 18)
p.name = '李四' // 无法为只读属性赋值

/* 
  readonly，顾名思义只读，可以随意使用，但是不能赋值
*/