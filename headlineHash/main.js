function getHashTags(str) {
  let arrToReturn = [];
  const splitarr = str.split(" ").sort(function (a, b) {
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
