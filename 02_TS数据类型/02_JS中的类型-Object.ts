let info: { name: string, age: number} = {
  name: 'why',
  age: 18
}

// 自动推导类型为{propName: string; size: number;}
let data = {
  propName: 'daxx',
  size: 1024
}

info = {
  name: 'aa',
  age: 1,
}