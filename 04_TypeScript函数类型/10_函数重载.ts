
// function foo(arg: number, arg2: number): number {
//   return arg + arg2
// }
// function foo(arg: string,arg2: string): string{
//   return arg + arg2
// }


function foo(arg: number, arg2: number): number
function foo(arg: string,arg2: string): string
function foo(arg: any, arg2: any): any{
  return arg + arg2
}

foo(1,2)
foo('str1','str2')
console.log(foo(1, 2));
// foo(1,'str2') // 报错

/* 
  需求：传入的俩参数要么都是数字，要么都是字符串
  你会发现你用联合类型string|number也无法处理

  函数重载签名：
  1.定义出函数的重载签名
  2.定义出函数的实现签名(定义顺序不能颠倒)最好用any，方便兼容
  
*/
