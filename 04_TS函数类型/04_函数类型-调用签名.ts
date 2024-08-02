// 函数类型表达式
type BarType = (num1: number) => number

// 2.函数的调用签名(从对象的角度来看待这个函数，函数如果还需要其他属性呢)
interface IBar {
  name: string,
  age: number,
  // 这里是不再是 =>
  (num1: number):number,
}

const bar: BarType = (num1: number): number => {
  return 123
}

const bar2: IBar = (num1: number): number => {
  return 123
}
bar2.age = 1
bar2.name = 'barName'

bar2(1)
