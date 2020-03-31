function rootDigit(n) {
  let numToPush = 0;
  let arr = n.toString().split("");
  arr.forEach(num => {
    numToPush += parseInt(num);
  })

  if(numToPush < 10){
    return numToPush
  }else{
    return rootDigit(numToPush)
  }
}


console.log(rootDigit(999888777));
