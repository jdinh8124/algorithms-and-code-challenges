function getHashTags(str) {
  let arrToReturn;
  const splitarr = str.split().sort(function(a,b){
    return b.length - a.lengths
  }
  )
  for(let i = 0; i < 3; i++){
    arrToReturn.push("#"+splitarr[i])
  }
  return arrToReturn;
}
