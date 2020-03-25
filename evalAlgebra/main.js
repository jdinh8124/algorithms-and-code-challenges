function evalAlgebra(eq) {
  debugger;
  const arrEq = eq.split(" ");
  let findIndex = arrEq.findIndex(index => index === "x");
  if(findIndex === 4){
      if(arrEq[1] === "+"){
        return parseInt(arrEq[0]) + parseInt(arrEq[2])
      }else{
        return parseInt(arrEq[0]) - parseInt(arrEq[2])
      }
  }else{
    if(arrEq[0] === "x"){
      if (arrEq[1] === "+") {
        return parseInt(arrEq[4]) - parseInt(arrEq[2])
      } else {
        return parseInt(arrEq[2]) + parseInt(arrEq[4])
      }
    }else{
      if (arrEq[1] === "+") {
        return parseInt(arrEq[4]) - parseInt(arrEq[0])
      } else {
        return parseInt(arrEq[0]) + parseInt(arrEq[4])
      }
    }
  }
}


console.log(evalAlgebra("4 - x = 1"))
