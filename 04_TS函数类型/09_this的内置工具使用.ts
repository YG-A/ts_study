function foo(this: {name: string},info: {name:string}){
  console.log(this,info);
}

type FooType = typeof foo

// 1.ThisParameterType 获取FooType类型中this的类型
type FooThisType = ThisParameterType<FooType>

// 2.OmitThisParameter: 删除this参数类型，剩余的函数类型
type PureFooType = OmitThisParameter<FooType>

interface IState {
  name: string,  
  age: number
}

interface IStore{
  state: IState
}

const store: IStore = {
  state: {
    name: 'str',
    age: 22
  }
}

