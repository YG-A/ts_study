// class Person{
//   name:string
//   age:number

//   constructor(name: string,age: number){
//     this.name = name
//     this.age = age
//   }
// }

// 语法糖，简写形式
class Person {
  constructor(public name: string, public age: number) {
    // 这也可以注释，也算在语法糖里面了
    // this.name = name
    // this.age = age
  }
}

const p1 = new Person('yg',24)
p1.name = 'xxx'
p1.age = 88
