
function checkPattern(arr, pattern) {
  debugger;
  const objToCheck ={};
    for(let i = 0 ; i < arr.length; i++){
      if(!objToCheck[pattern[i]]){
        objToCheck[pattern[i]] = arr[i]
      }else{
        for(let w = 0; w < arr[i].length; w++ ){
          if (arr[i][w] !== objToCheck[pattern[i][w]]){
            return false
          }
        }
      }
    }
    return true;
}

console.log(checkPattern([[1, 1], [2, 2], [1, 1], [2, 2]], "ABAB"))
