function ascending(str) {
  let consectNums = false;
  let ascending = false;

  const splitArr = str.split("");
  const nums = splitArr.map(nums => parseInt(nums));
  const newArrJoined = [];
  let stringToPush = "";
  let numToPush;
  debugger;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 || stringToPush === "" || typeof nums[i - 1] === "undefined" || nums[i] > nums[i-1] ) {
      if (typeof nums[i - 1] === "undefined" || typeof newArrJoined[0] === "undefined" || newArrJoined[0].length > 0 ){
        if ( typeof newArrJoined[0] === "undefined" || numToPush !== stringToPush.length){
        stringToPush += nums[i];
      }else{
          newArrJoined.push(stringToPush);
          numToPush = newArrJoined[0].length;
          stringToPush = "";
          stringToPush += nums[i];
      }
    }
    } else if(stringToPush.length > 0) {
      if(!numToPush){
        newArrJoined.push(stringToPush);
        numToPush = newArrJoined[0].length;
        stringToPush = "";
        stringToPush += nums[i];
      }else {
        if (numToPush === stringToPush.length) {
          newArrJoined.push(stringToPush);
          numToPush = newArrJoined[0].length;
          stringToPush = "";
          stringToPush += nums[i];
        } else {
          stringToPush += nums[i];

        }
      }
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

console.log(ascending("1234567"))
