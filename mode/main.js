function mode(nums) {
  let occur = 0;
  let arrToReturn = [];
  let current = 0;

  for(let i = 0; i < nums.length ; i++){
    occur = 0;
    for(let w = 0; w < nums.length; i++){
      if(nums[i] === nums[w]){
        occur++;
      }
    }
    if(occur > current){
      arrToReturn = [];
      arrToReturn.push(nums[i]);
      current = occur;
    }else if(occur === current){
      arrToReturn.push(nums[i]);
    }
  }
}


console.log(mode([1, 2, 2, 3, 6, 6, 7, 9]))
