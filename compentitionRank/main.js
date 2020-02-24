function competitionRank(results, person) {
debugger;
  const arrToCompare = [];
  const arrOfFinish = [];
  for(const key in results){
    arrToCompare.push([results[key], key])
  }
  arrToCompare.sort((a,b) => b[0] - a[0] )
  console.log(arrToCompare)

  let num = 1;
  for(let i = 0; i < arrToCompare.length; i++){
  if(i === 0){
    arrOfFinish.push(num);
    return;
  }
  if(arrToCompare[i][0] === arrToCompare[0][0]){
    arrOfFinish.push(num);
    return;
  }

    if (arrToCompare[i][0] === arrToCompare[i+1][0]){
      let duplicate = 0;
      for (let w = i + 1; w < (arrToCompare.length - i); w++){
        if (arrToCompare[i][0] === arrToCompare[w][0]){

        }
      }
    }  else{
    num++;
    arrOfFinish.push(num);
  }
}
}

console.log(competitionRank(competitionRank({ Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87 }, "Ellie"), 4))
