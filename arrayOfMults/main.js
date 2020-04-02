function arrayOfMultiples(num, length) {
  const arrToReturn = [];
    for(let i = 1; i <= length; i++){
        arrToReturn.push(num * i)
      }
    return arrToReturn;
}
