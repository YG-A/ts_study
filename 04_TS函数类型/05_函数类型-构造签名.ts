class Person{
  public name: string
  public age: number
  constructor(name,age){
    this.name = name
    this.age = age
  }
}

interface ICTORPerson{
  new (name:string, age:number): Person
}

function factory(constructorFn: ICTORPerson){
  const obj = new constructorFn('yg',24)
  return obj
}

factory(Person)
