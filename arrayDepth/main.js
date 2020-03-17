function depth(arr) {
  let numToReturn = 1;
  for(let i = 0; i < arr.length; i++){
    if (Array.isArray(arr[i])){
      while (Array.isArray(arr[i])){
        let newArr = arr.flat()
        numToReturn++
        arr = newArr;
      }
    }
  }
  return numToReturn;
}




console.log(depth([1, [2, [3, [4]]]]))
