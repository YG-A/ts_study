class Person {
  name: string;
  private age: number;
  height: number;
  constructor(name: string,age: number,height: number){
    this.name = name
    this.age = age
    this.height = height
  }
}

/* 上面的语法糖 */
class Person2 {
  constructor(public name: string, private _age: number, readonly height: number) {
    this.name = name
    this._age = _age
    this.height = height
  }
}

const p2 = new Person2('张三',18,180)
p2.name = '李四'
console.log(p2);
