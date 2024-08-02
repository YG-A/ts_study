// 函数没有返回值时，默认返回类型就是void
function sum(num1: number,num2: number){
  console.log(num1 + num2);
}
function sum2(num1: number, num2: number):void {
  console.log(num1 + num2);
}

type fnType = () => void
type fnType2 = () => string

const foo: fnType = () => {
  return 188// 定义的返回值为void时，返回值没有明确要求
}
const foo2: fnType2 = () => {
  return '222'
}

function delayExec(fn: (...args: any[]) => void, delay: number){
  setTimeout(()=>{
    fn(1,2,3,4)
  }, delay)
}

delayExec((...args)=>{
  
},2000)




