/* 
  public 默认修饰符，可以任意访问
  protect 只能在本类或子类中访问 
  private 只能在本类中访问
*/
class Person {
  public name: string
  private age: number
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }

  public run(): void {
    console.log(this.name,'run',this.age)
  }
  protected priFn(){
    console.log('private')
  }
}

class Student extends Person {
  constructor(name: string, age: number){
    super(name, age)
  }

  public study(): void {
    console.log(this.name,this.age,'study')
    this.priFn()
  }
}

const p = new Person('张三', 18)
p.name = '李四'
p.run()
// 受保护的方法在除class内部以及其子类外，不能访问
p.priFn()
// 私有属性不能在class外部访问
console.log(p.age);
p.age = 20

/* 

*/
