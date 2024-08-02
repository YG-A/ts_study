function printID(id: number | string){
  if(typeof id === "string"){
    console.log(id,'id的长度：',id.length);
  }else{
    console.log(id);
    
  }
}

type Direction = "left" | "right" | "top" | "bottom"
function switchDirection(direction: Direction){
  if (direction === "left"){
    direction = "right"
  } else if (direction === "top"){
    direction = "bottom"
  }
}

function printDate(date: string|Date){
  if (date instanceof Date){
    console.log(`${date.getFullYear()}-${date.getMonth()}`);
  }else{
    console.log(date);
  }
}

interface ISwim{
  swim: () => void
}
interface IRun{
  run: () => void
}

const fish: ISwim = {
  swim(){
    console.log('我在猛游');
  }
}
const dog: IRun = {
  run() {
    console.log('我巨喜欢跑');
  }
}

function move(animal: ISwim | IRun){
  if ("swim" in animal){
    animal.swim()
  }else{
    animal.run()
  }
}
