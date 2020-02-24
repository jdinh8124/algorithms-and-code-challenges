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
      for (let w = i + 1; w <= (arrToCompare.length - i); w++){
        if (firstDuplicate === arrToCompare[w][0]){
          duplicate++;
        }
      }
      i+= duplicate -1;
      notFirst++;
      for(let m = 0; m < duplicate; m++){
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

console.log(competitionRank({ Ben: 78, Quinn: 84, Lena: 84, Isla: 92, Kayla: 72 }, "Ben"))
