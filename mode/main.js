function mode(nums) {
  let occur = 0;
  let arrToReturn = [];
  let current = 0;

  for(let i = 0; i < nums.length ; i++){
    occur = 0;
    for(let w = 0; w < nums.length; w++){
      if(nums[i] === nums[w]){
        occur++;
      }
    }
    if(occur > current){
      if (!arrToReturn.includes(nums[i])) {
      arrToReturn = [];
      arrToReturn.push(nums[i]);
      current = occur;
      }
    }else if(occur === current){
      if(!arrToReturn.includes(nums[i])){
        arrToReturn.push(nums[i]);
      }
    }
  }
  return arrToReturn;
}


console.log(mode([1, 2, 2, 3, 6, 6, 7, 9]))
