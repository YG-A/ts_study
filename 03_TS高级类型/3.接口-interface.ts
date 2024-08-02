type PointType1 = {
  x: number,
  y: number,
  z?: number
}

/* 
  type与interface在【定义对象类型时】很相似，大部分时候，可以任意选择
  区别：
  1.type可以定义任何类型，甚至时联合类型，它是一个类型的别名
    interface只能定义对象类型
  2.interface可以声明多个名称相同的接口,多次声明并不会覆盖彼此，而是组合到一起
  3.interface支持继承 extends
  4.interface 支持class的implements 实现(后续再讲)
  
  总结：如果是【非对象类型，用type】，【定义对象类型，用interface】
*/
interface PointType2 {
  x: number,
  y: number,
  z?: number
}
interface PointType2 {
  b: number,
  c: number
}
// 继承于PointType2
interface nbPointType extends PointType2{
  nb: string
}


const point: PointType2 = {
  x: 1,
  y: 1,
  z: 1,

  b: 1,
  c: 1
}

const nbPoint: nbPointType = {
  x: 1,
  y: 1,
  z: 1,
  b: 1,
  c: 1,
  nb: '牛逼class',
}
