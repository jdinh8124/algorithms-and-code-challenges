function houseRobber(nums) {
  let cash = 0;
  for(let i = 0; i < nums.length; i++){
    let highest = Math.max(...nums);
    let found = nums.findIndex(number => number === highest)
    if (nums.length === 1) {
      return cash + nums[0]
    }
    if (nums.length === 2) {
      return cash + Math.max(...nums)
    }
    if(found === 0){
      cash += nums[found];
      nums.splice(0, 2)
      i-= 1;
    }else if(found === nums.length -1){
      cash += nums[found];
      nums.splice(found -1 , 2)
      i -= 1;

    }else if(i < -1 || nums.length === 0){
      return cash;
    }
    else{
      cash += nums[found];
      nums.splice(found - 1, 3)
      i -= 1;
    }
  }
  return cash
}

console.log(houseRobber([1,1,1]))
