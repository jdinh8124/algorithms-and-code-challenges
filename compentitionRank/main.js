function competitionRank(results, person) {
  const arrToCompare = [];
  const arrOfFinish = [];
  for(const key in results){
    arrToCompare.push([results[key], key])
  }
  debugger;
  arrToCompare.sort((a,b) => b[0] - a[0] )
  let num = 1;
  let notFirst = 1;
  for(let i = 0; i < arrToCompare.length; i++){
  if(i === 0){
    arrOfFinish.push(num);
  }else if(arrToCompare[i][0] === arrToCompare[0][0]){
    arrOfFinish.push(num);
    notFirst++;
  }
    else if (typeof arrToCompare[i+1] !== "undefined" && arrToCompare[i][0] === arrToCompare[i+1][0]){
      let duplicate = 1;
    let firstDuplicate = arrToCompare[i][0];
    let start = i;
      for (let w = start; w < arrToCompare.length; w++){
        if (firstDuplicate === arrToCompare[w][0]){
          duplicate++;
        }
      }
      i+= duplicate -1;
      notFirst+= duplicate - 1;
      for(let m = 0; m < duplicate - 1; m++){
        arrOfFinish.push(notFirst)
      }
    }  else{
    notFirst++;
    arrOfFinish.push(notFirst);
  }
}
  let foundNum = arrToCompare.findIndex(item => item[1] === person);
  let finishOfPerson = arrOfFinish[foundNum];

  return finishOfPerson;
}

console.log(competitionRank({ Violet: 99, Finn: 100, Eden: 99, Frankie: 98, Rory: 98 }, "Frankie"))
