function groupSeats(arr, n) {
  let numOfSeats = 0;
  arr.forEach(singleArr => {
    for(let i = 0; i < singleArr.length; i++){
      let num = 0;
      if(singleArr[i] === 0){
        let w = i
        for (let amountChecked = 0; amountChecked < n; amountChecked++) {
          if (singleArr[i] === singleArr[w]) {
            num++
          } else {
            num = 0;
          }
          w++
        }
        if (num === n) {
          numOfSeats++;
        }
      }
    }
  })
  return numOfSeats;
}
