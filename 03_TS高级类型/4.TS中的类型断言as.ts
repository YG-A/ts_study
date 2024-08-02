// 用as 断言将这个通过类名获取的元素，确定为img元素，从而使得能直接使用src属性
const imgEl = document.querySelector('.img') as HTMLImageElement
console.log(imgEl.src);


let num1: number = 18

/* 
  as，只能将类型,断言为更具体的类型，比如any断言为string
  或者将某个接口类型断言为其实现的类
*/
// let num2 = num1 as string// 报错了

let num3:any = 18
let num4 = num3 as string