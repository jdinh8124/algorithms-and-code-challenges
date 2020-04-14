function getHashTags(str) {
  debugger;
  let newString = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== "," && str[i] !== "?") {
      newString += str[i];
    }
  }
  let arrToReturn = [];
  const splitarr = newString.split(" ").sort(function (a, b) {
    return b.length - a.length
  }
  )
  for (let i = 0; i < 3; i++) {
    if (splitarr.length > i) {
      arrToReturn.push("#" + splitarr[i].toLowerCase())
    }
  }
  return arrToReturn;
}



console.log(getHashTags("Are You an Elite Entrepreneur?"))
