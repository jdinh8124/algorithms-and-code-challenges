function numInStr(arr) {
  let arrToReturn = [];
  arr.forEach(item =>{
    let isNumber = false;
    for(let i = 0; i < item.length; i++){
      if(!isNaN(parseInt(item[i]))){
        isNumber = true;
      }
    }
    if(isNumber){
      arrToReturn.push(item);
    }
  })
  return arrToReturn
}



// function numInStr(arr) {
//   return arr.filter(x => /[0-9]/.test(x));
// }
