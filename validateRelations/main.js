function validateTheRelationships(str) {
  const arrToEval = [];
  let numToPush = "";
  for(let i = 0; i < str.length; i++){
    if (str[i] === ">" || str[i] === "<" || str[i] === "=" ){
      if (str[i + 1] === "=" ){
        arrToEval.push(numToPush);
        arrToEval.push(str[i] + str[i + 1]);
        numToPush = "";
        i++;
      }else{
        arrToEval.push(numToPush);
        arrToEval.push(str[i]);
        numToPush = "";
      }
    }else{
      numToPush += str[i];
      if(i === str.length - 1){
        arrToEval.push(numToPush);
      }
    }
  }
  let factual = true;

  for (let i = 0; i < arrToEval.length; i++) {
    if (arrToEval[i] === ">" || arrToEval[i] === "<" || arrToEval[i] === "=" || arrToEval[i] === ">=" || arrToEval[i] === "<="   ){
      let num1 = parseInt(arrToEval[i - 1]);
      let opp = arrToEval[i];
      let num2 = parseInt(arrToEval[i + 1]);
      switch (opp){
        case '>':
          if(!(num1 > num2)){
            factual = false;
          }
          break;
        case '<':
          if (!(num1 < num2)) {
            factual = false;
          }
          break;
        case '=':
          if (!(num1 === num2)) {
            factual = false;
          }
          break;
        case '<=':
          if (!(num1 <= num2)) {
            factual = false;
          }
          break;
        case '>=':
          if (!(num1 >= num2)) {
            factual = false;
          }
          break;
      }
    }
  }
  return factual;
}
