function nextNumber(num) {
  const arrAllOpt = [];
  let numberStringed = num.toString();
  const numberedArr = numberStringed.split("")
  for(let i = 0; i < numberedArr.length; i++ ){
    let numToPush = numberedArr[i];
    for(let w = 0; w < numberedArr.length; w++){
      if(w !== i){
        numToPush += numberedArr[w];
      }
    }
    arrAllOpt.push(numToPush);
  }
  debugger;
  //   const numberedArr = arrayOfNums.map(Number);
  arrAllOpt.sort();
  let found = arrAllOpt.indexOf(item => item === num);
  if(found === arrAllOpt.length - 1){
    return num;
  }else{
    return arrAllOpt[found + 1];
  }
}

console.log(nextNumber(899))





// if (num.length === 2) {
//   let numberStringed = num.toString();
//   const arrayOfNums = numberStringed.split("")
//   const numberedArr = arrayOfNums.map(Number);
//   numberedArr.sort();

//   let numString = ""
//   for (let i = numberedArr.length - 1; i > 0; i--) {
//     numString += numberedArr[i];
//   }
//   return parseInt(numString);
// }
