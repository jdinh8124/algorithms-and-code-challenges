function toArray(obj) {
  let arrToReturn = []
  for(let key in obj){
    let pair = [key, obj[key]]
    arrToReturn.push(pair)
  }
  return arrToReturn;
}



function toArray(obj) {
  return Object.entries(obj);
}
