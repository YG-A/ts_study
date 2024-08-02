function foo(basicNum: number,...numArr: number[]){
  return basicNum + numArr.reduce((pre,cur)=>pre+cur,0)
}
foo(5,10,15,20)

/* 
  总结：函数的剩余参数，指定类型时，需要指定为某数组类型
*/
