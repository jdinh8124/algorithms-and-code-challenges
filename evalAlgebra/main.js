function evalAlgebra(eq) {
  debugger;
  const arrEq = eq.split(" ");
  let findIndex = arrEq.findIndex(index => index === "x");
  if(findIndex === 4){
      if(arrEq[1] === "+"){
        return Math.abs(parseInt(arrEq[0])) + Math.abs(parseInt(arrEq[2]))
      }else{
        return Math.abs(parseInt(arrEq[0])) - Math.abs(parseInt(arrEq[2]))
      }
  }else{
    if(arrEq[0] === "x"){
      if (arrEq[1] === "+") {
        return Math.abs(parseInt(arrEq[4])) - Math.abs(parseInt(arrEq[2]))
      } else {
        return Math.abs(parseInt(arrEq[2])) - Math.abs(parseInt(arrEq[4]))
      }
    }else{
      if (arrEq[1] === "+") {
        return Math.abs(parseInt(arrEq[4])) - Math.abs(parseInt(arrEq[0]))
      } else {
        return Math.abs(parseInt(arrEq[0])) - Math.abs(parseInt(arrEq[4]))
      }
    }
  }
}


console.log(evalAlgebra("-29 - x = -170"))
