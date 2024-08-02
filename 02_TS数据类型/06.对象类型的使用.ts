const info: {name: string,age: number} = {
  name: 'why',
  age: 18,
}

// 打印一个坐标
function printCoordinate(pointer: {x: number,y: number}){
  console.log(pointer.x,pointer.y);
}

// 获取一个坐标
function getCoordinate(pointer: { x: number, y: number }) {
  return pointer
}

/* 
  你会发现，当你有多个函数用到同一个对象参数或返回同一个类型的对象时
  每次都要写同样的 类型注解，这时可以定义一个类型
*/
type pointerType = {
  x: number,
  y: number,
  z?: number,// '?'表示可选的，这个属性可有可无，不会引起报错
}
function printCoordinate2(pointer: pointerType) {
  console.log(pointer.x, pointer.y);
}
function getCoordinate2(pointer: pointerType): pointerType {
  return pointer
}
printCoordinate2({x:0,y:0})
printCoordinate2({x:0,y:0,z:0})