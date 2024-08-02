interface IPerson{
  name: string,
  age: number,
  friend?:{
    name: string
  }
}

const info: IPerson = {
  name: 'xx',
  age: 18
}

// 访问时可用 可选链操作符?.
console.log(info.friend?.name);

// 如果是赋值呢，无法用?.
// info.friend.name = 'lll' // 报错

// 方式一，类型缩小
if (info.friend){
  info.friend.name = 'lll'
}

// 方式二，非空类型断言 “!.” （这个断言有点危险，只有确保friend有值时，才去使用，不然容易报错） 
info.friend!.name = 'lll'