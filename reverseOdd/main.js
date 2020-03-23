function reverseOdd(str) {
  const arrToReturn = [];
  str.split(" ").map(item => item.length % 2 === 0 ? arrToReturn.push(item) : arrToReturn.push(item.split("").reverse().join("")) )
  return arrToReturn;
}
