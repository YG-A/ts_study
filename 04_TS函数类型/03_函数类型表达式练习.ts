type calcFnType = (num1:number,num2:number) => number

function calc(calcFn: calcFnType){
  const num1 = 10
  const num2 = 20
  const res = calcFn(num1, num2)
  console.log(res);
}

const add: calcFnType = (num1,num2) =>{
  return num1 + num2
}
const mul: calcFnType = (num1,num2) =>{
  return num1*num2
}

calc(add)
calc(mul)

calc((num1,num2)=>{
  return num1 - num2
})