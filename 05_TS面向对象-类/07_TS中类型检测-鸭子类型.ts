class Person{
  constructor(public name:string,public age: number){}
  sayHello(){
    console.log('你好');
  }
}

class Dog{
  constructor(public name: string, public age: number) {}
  sayHello() {
    console.log('你好');
  }
}

function printPersonInfo(p: Person){
  console.log(p.name,p.age);
}

printPersonInfo(new Person('yg',24))

// 竟然可以传这个对象进去，并且没有报错
printPersonInfo({ name: 'xx', age: 12, sayHello (){}})

// 这样居然没有报错
const p1: Person = new Dog('旺财',3)

/* 
  TypeScript 对于类型的检测的时候使用的是 “鸭子类型”
  鸭子类型（典故）:如果一直鸟儿，走起路像鸭子，游泳也像鸭子，看起来也长得像鸭子，那么你可以认为它就是鸭子
  鸭子类型，只关心【属性】和【方法】是不是一样的，不关心你具体是不是对应的类型
  就像这里Person和Dog，根本就不是同一个类型，但是同样拥有name、age属性、sayHello方法，
  所以在做类型检测时认为是同一类型
*/
