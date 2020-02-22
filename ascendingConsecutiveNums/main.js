function ascending(str) {
  let consectNums = false;
  let ascending = false;

  const splitArr = str.split("");
  debugger;
  const nums = splitArr.map(nums => parseInt(nums));
  const newArrJoined = [];
  let stringToPush = "";
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0|| nums[i] > nums[i - 1] || typeof nums[i-1] === "undefined") {
      stringToPush += nums[i];
    } else if(stringToPush.length > 0) {
      newArrJoined.push(stringToPush);
      stringToPush = "";
      stringToPush += nums[i];
    }
  }

  for (let i = 1; i < newArrJoined.length; i++) {
    if (newArrJoined[i] > newArrJoined[i - 1]) {
      ascending = true;
    }
    if (parseInt(newArrJoined[i]) === (parseInt(newArrJoined[i - 1]) + 1)) {
      consectNums = true;
    }
  }

  if (ascending && consectNums) {
    return true
  }
  return false;
}

console.log(ascending("57585960616263"))
