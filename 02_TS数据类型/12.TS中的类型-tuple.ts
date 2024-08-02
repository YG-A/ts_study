// tuple 元组类型
let info:[string,number,number]

info = ['string', 66, 188]

function useState(state:any): [any,(newValue: any) => void]{
  let stateVal = state
  function setValue(newValue: any){
    stateVal = newValue
  }
  return [stateVal, setValue]
}

let [count,setCount] = useState(10)
