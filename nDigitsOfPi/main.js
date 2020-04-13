function pi(n) {
let stringToReturn = "";
for(let i = 0; i < n + 2; i++){
  let pi = Math.PI + "";
  stringToReturn += pi[i]
}
return stringToReturn
}
