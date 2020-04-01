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




console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]))
