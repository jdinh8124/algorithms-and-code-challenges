function validateTheRelationships(str) {
  const arrToEval = [];
  let numToPush = "";
  for(let i = 0; i < str.length; i++){
    if(parseInt(str[i]) === NaN ){
      if (parseInt(str[i + 1]) === NaN){
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
    }
  }
  let factual = true;
  for (let i = 0; i < arrToEval.length; i++) {
    if(parseInt(arrToEval[i]) === NaN ){
      debugger;
      if (!(parseInt(arrToEval[i - 1]) arrToEval[i] parseInt(arrToEval[i+1]))){
        factual = false;
      }
    }
  }
}
