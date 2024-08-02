// 先编写重载签名
function add(arg1: number, arg2: number): number
function add(arg1: string, arg2: string): string

// 编写通用的函数实现
function add(arg1:any,arg2:any):any{
  return arg1 + arg2
}

add(10,20)
add('aaa','bbb')
 