class Person{
  private _name:string
  private _age:number

  constructor(name: string,age: number){
    this._name = name
    this._age = age
  }

  // setter/getter 对属性的访问进行拦截操作
  set age(newAge: number){
    if (newAge > 0 && newAge < 200){
      this._age = newAge
    }else{
      throw new Error('传入年龄有误')
    }
  }
  get age(): number{
    return this._age
  }

  set name(newName: string){
    this._name = newName
  }
  get name(): string{
    return this._name
  }


}

const p1 = new Person('yg',24)

