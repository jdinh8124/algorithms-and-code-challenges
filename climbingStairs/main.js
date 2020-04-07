function climbingStairs(n) {
  const arrToReturn = [1, 1]
  for (let i = 2; i < 50; i++) {
    let numToPush = arrToReturn[i - 2] + arrToReturn[i - 1];
    arrToReturn.push(numToPush)
  }
  return arrToReturn[n]
}
