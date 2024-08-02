// 实际开发中只有进行类型推导时，可能会自动推导出never类型，但是很少使用它
function getArr(){// 这里推导了一个never[]类型的返回值
  return []
}

// 获取了一个never[]
let arr = getArr()

// 报错，不能把string加到never[]中
arr.push('1')