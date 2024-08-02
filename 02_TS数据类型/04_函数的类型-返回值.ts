function sum(num1: number, num2: number): number{
  return num1 + num2
}

sum(1,2)
// sum('1','2')// 报错

function parseStr(str:string): string[]{
  let arr: string[] = []
  for (const item of str) {
    arr.push(item)
  }
  return arr
}

type columnType = {
  key: string,
  prop: string,
} 

console.log(parseStr('123'));// ['1','2','3']
