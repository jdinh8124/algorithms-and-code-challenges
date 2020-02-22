
function checkPattern(arr, pattern) {
  const objToCheck ={};
  let same = false;
    for(let i = 0 ; i < arr.length; i++){

      if(!objToCheck[pattern[i]]){
        objToCheck[pattern[i]] = arr[i]
        for (let x = 0; x < arr[i].length; x++) {
          if(pattern[i] !== pattern[i-1]){
            if (i !== 0 && arr[i][x] === arr[i -1][x]){
              same = true;
            }else{
              same = false;
            }
          }
        }
      }else{
        for(let w = 0; w < arr[i].length; w++ ){
          if (arr[i][w] !== objToCheck[pattern[i]][w]){
            return false
          }
        }
      }
    }
    if(same){
      return false;
    }
    return true;
}

console.log(checkPattern([[1, 2], [1, 2], [1, 2], [1, 2]], "ABAB"))
