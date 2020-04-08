function houseRobber(nums) {
  if(nums.length === 1){
    return nums[0]
  }
  let cash = 0;
  for(let i = 0; i < nums.length; i++){
    let highest = Math.max(...nums);
    let found = nums.find(number => number === highest)
    cash += found;
    if(i === 0){
      nums.splice(0, 2)
      i-= 3;
    }else if(i === nums.length -1){
      nums.splice(i-1 , 2)
      i -= 3;

    }else if(i < -1){
      return cash;
    }
    else{
      nums.splice(i - 1, 3)
      i -= 4;
    }
  }
  return cash
}

console.log(houseRobber([1, 1, 1]))
