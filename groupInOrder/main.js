function group(arr, size) {
  debugger;
  const arrToReturn = [];
  let numOfArrs = Math.ceil(arr.length / size);
  for(let i = 0; i < numOfArrs; i++){
    arrToReturn.push([]);
  }
  let arrNumToPush = 0;
  for(let i = 0; i < arr.length; i++){
    if(arrNumToPush === arrToReturn.length){
      arrNumToPush = 0;
    }
    arrToReturn[arrNumToPush].push(arr[i])
    arrNumToPush++
  }
  return arrToReturn;
}
