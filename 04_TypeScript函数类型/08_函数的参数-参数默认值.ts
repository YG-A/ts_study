function foo(x: number, y = 100){
  console.log(x + y + 10);
}

foo(1)
foo(1)
foo(100)
foo(100,200)
/* 
  总结：函数的参数给默认值时，该参数自动变为可选参数
*/
