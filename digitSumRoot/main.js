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



// function rootDigit(n) {
//   while (n.toString().length > 1) {
//     n = Number(n.toString().split("").reduce((a, b) => Number(a) + Number(b), 0));
//   }
//   return n;
// }
