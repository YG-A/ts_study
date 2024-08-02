class Person{
  constructor(public name:string,public age: number){}
  sayHello(){
    console.log('你好');
  }
}
/* 
  类的作用
  1. 可以创建对应的实例对象
  2. 类本身可以作为这个实例的类型
  3. 类也可以当成一个有构造签名的函数
*/
const p: Person = new Person('yg',24)

function Factory(ctor: new (name, age) => any){
  return new ctor('xx',15)
}
Factory(Person)