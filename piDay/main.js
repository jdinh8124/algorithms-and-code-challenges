function pi(n) {
  debugger;
  let pi = Math.PI + "";
  let stringToReturn = "";
  for(let i = 0; i < n + 2; i++){
    stringToReturn += pi[i];
  }
  return stringToReturn;
}


console.log(pi(2))
