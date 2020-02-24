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
    if(i === 1){
      notFirst = 3;
    }else{
      notFirst++;

    }
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
      for(let m = 0; m < duplicate - 1; m++){
        arrOfFinish.push(notFirst)
      }
    notFirst += duplicate - 1;

    }  else{
    arrOfFinish.push(notFirst);
    notFirst++;
  }
}
  let foundNum = arrToCompare.findIndex(item => item[1] === person);
  let finishOfPerson = arrOfFinish[foundNum];

  return finishOfPerson;
}

console.log(competitionRank({ Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87 }, "Ellie"), 3)
