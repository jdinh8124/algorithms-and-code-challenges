function changeEnough(change, amountDue) {
  let total = 0;
  for(let i = 0; i <change.length; i++){
    if(i === 0){
      total += parseFloat((change[i] * 25/100).toFixed(2));
    } else if (i === 1) {
      total += parseFloat((change[i] * 10 / 100).toFixed(2));
    } else if (i === 2) {
      total += parseFloat((change[i] * 5 / 100).toFixed(2));
    }else{
      total += parseFloat((change[i] * 1 / 100).toFixed(2));
    }
  }
  if(total >= amountDue){
    return true
  }
  return false;
}

console.log(changeEnough([1, 0, 5, 219], 19.99))
