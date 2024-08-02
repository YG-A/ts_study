function logArrLength(arr: Array<any> | string) {
  console.log(arr.length);
}

function getLength(arg: { length:number }){
  console.log(arg.length);
}

logArrLength(888)// 报错了

getLength('string')
getLength([1,2,3])

export {}