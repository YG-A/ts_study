class Person {
  private _name: string;
  private _age: number;
  constructor(name: string,age: number){
    this._name = name
    this._age = age
  }
  running() {
    console.log(this._name,'running')
  }

  set name(newName: string){
    this._name = newName
  }
  get name(): string{
    return this._name
  }

  set age(newAge: number) {
    this._age = newAge
  }
  get age(): number {
    return this._age
  }
}

const p = new Person('张三',18)
p.name = '李四'
console.log(p.name, p.age);
/* 
  约定俗成一个规则，private属性前面加下划线

*/
export {}