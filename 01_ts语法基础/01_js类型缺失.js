// js无法控制类型，无法在开发阶段去解决这种基本的错误
function logArrLength(arr){
  console.log(arr.length);
}

logArrLength(888)// 我传入非数组也不会报错，很难受