function removeDuplicates(arr){
  let obj = {};
  for(let i = 0; i < arr.length; i++){
    obj[arr[i]] = arr[i];
}
  let arrToReturn = [];
  for(let key in obj){
    arrToReturn.push(obj[key])
  }
  return arrToReturn;
}


console.log(removeDuplicates([1, 4, 5, 0, 1, 9, 0, 6, 3, 8, 4, 5, 4, 1]))
