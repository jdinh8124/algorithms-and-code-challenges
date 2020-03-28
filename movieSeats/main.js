function groupSeats(arr, n) {
  debugger;
  let numOfSeats = 0;
  arr.forEach(item => {
    let num = 0;
    item.forEach(seat => {
      if(num === n){

      }
      else if(seat === 0){
        num++
      }else{
        num = 0;
      }
    })
    if(num >= n){
      numOfSeats++
    }
  })
  return numOfSeats;
}


console.log(groupSeats([[1, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 0, 1],
  [1, 1, 0, 1, 1, 0, 1],
  [1, 0, 1, 1, 1, 1, 1],
  [1, 0, 1, 1, 0, 0, 0]], 4))
