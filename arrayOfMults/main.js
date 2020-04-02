function arrayOfMultiples(num, length) {
  const arrToReturn = [];
    for(let i = 0; i < length; i++){
      if(i === 0){
        arrToReturn.push(num)
      }else{
        arrToReturn.push(num * (i + 1))
      }
    }
    return arrToReturn;
}
