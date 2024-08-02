/* 
  有些类型不确定, 
  这是与any的区别
  相同点：unknown和any 都可以接受任意类型的赋值

  不同点：any可以对值进行任意操作，比如info.push、info.length 这些都不会报错
         unknown 不能对值有任何操作，会直接报错
*/
let info: unknown = 'aa'
info = 123
info = [1,2,3]

// info.push()// 报错

// 如果想要操作，必须进行【类型缩小】
if (Array.isArray(info)){
  info.push('12121')
}
// 【类型缩小】
if(typeof info === 'string'){
  console.log(info.length);
  info.replace('a','')
}





