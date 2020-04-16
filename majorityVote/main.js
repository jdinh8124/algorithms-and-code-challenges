function majorityVote(arr) {
  arr.sort();
  let highest;
  let highestTimes = 0;
  let occurance;
  let occuranceTimes = 0;
  for(let i = 0; i < arr.length; i++){
    if(i === 0){
      occuranceTimes++
      occurance = arr[i]
    }else if (arr[i] === occurance){
      occuranceTimes++
    }else{
      if (occuranceTimes > highestTimes){
        highestTimes = occuranceTimes;
        highest = occurance;
      }
      occurance = arr[i];
      occuranceTimes = 1;
    }
  }
  if(arr.length / 2 > highestTimes){
    return null;
  }else{
    return highestTimes
  }
}
