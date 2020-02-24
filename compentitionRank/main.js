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
  let same = true;
  for(let i = 0; i < arrToCompare.length; i++){
  if(i === 0){
    arrOfFinish.push(num);
    num++;
    return;
  }
  // if(){

  // }
    arrOfFinish.push(num);
  }
}


console.log(competitionRank(competitionRank({ Aria: 90, Brooke: 90, Olivia: 90, Eve: 74, Ellie: 87 }, "Ellie"), 4))
