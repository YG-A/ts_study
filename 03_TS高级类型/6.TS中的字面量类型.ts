let name2: "why" = "why"
// name2 = "123"// 报错

type Direction = "left" | "top" | "bottom" | "right"

let direction: Direction = "left" 

// 赋值只能是这几个字面量
direction = "top"
direction = "right"
direction = "bottom"



type requestType = "get" | "post" | "put" | "delete" | "update"
function request(reqType: requestType){
  console.log(`通过${reqType}方式请求...`);
}
request('get')

let info = {
  url: "xxx",
  method: "post"
}
request(info.method as requestType)// 将string 断言为 requestType