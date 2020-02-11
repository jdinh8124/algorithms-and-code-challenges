function happy(n) {
  while (n > 10) {
    const arrayOfStringNums = n.toString().split('')
    const numberArray = arrayOfStringNums.map(Number)
    const squaredArr = numberArray.map(number => number * number)
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const added = squaredArr.reduce(reducer)
    if(added === 10){
      n = 1;
    }else{
      n = added;
    }
  }
  if (n === 1) {
    return true
  } else {
    false
  }
}
