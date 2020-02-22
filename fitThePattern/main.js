
function checkPattern(arr, pattern) {
  debugger;
  const objToCheck ={};
    for(let i = 0 ; i < arr.length; i++){
      if(i !== 0 && arr[i] === arr[i-1]){
        return false;
      }
      if(!objToCheck[pattern[i]]){
        objToCheck[pattern[i]] = arr[i]
      }else{
        for(let w = 0; w < arr[i].length; w++ ){
          if (arr[i][w] !== objToCheck[pattern[i]][w]){
            return false
          }
        }
      }
    }
    return true;
}

console.log(checkPattern([[1, 2], [1, 2], [1, 2], [1, 2]], "ABAB"))
