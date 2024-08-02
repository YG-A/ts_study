// 联合类型，是string 或者 number
let id: string|number = 1
id = '11848'

// 交叉类型, 是string 且是 number，这显然不成立，不可能有一个值既是string又是number
let id2: string & number

// 但是如果是接口呢，某个类型既实现了接口1 也实现了接口2
interface Person{
  name: string,
  age: number,
}
interface ICoder{
  coding: () => void
}

const coder: Person & ICoder = {
  name: 'why',
  age: 24,
  coding(){
    console.log('我巨会写');
  }
}