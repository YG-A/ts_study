// 有些类型不确定（你希望它可以是任何类型），用any,不限制标识符的任何类型, 能任意操作，像在写js一样
let info:any = "aaa"
info = 18
info = {name: 'why',age: 15 }

console.log(info.push());// 谁管你push方法有没有呢
console.log(info.xxx);

let arr: any[] = ['aa',11,{},[12,,13]]


