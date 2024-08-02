let name = 'why'

name = 1// 报错,明这里进行了默认的类型推导，将name已经默认推导为string了

function logxx(str = 'str'){
  console.log(str);
}

logxx(188) // 报错,明这里进行了默认的类型推导，将name已经默认推导为string了

/* 
  const的类型推导,与let不一样
  let定义的是变量,所以它推导出来的类型是一个string或number这种通用的类型
  const定义的常量,它不再允许被更改,所以它推导出来是一个1.88类型,也称为字面量类型
*/
const height = 1.88

export{}
