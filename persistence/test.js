function additivePersistence(n) {
  let counterAdd = 0;
  while (n >= 10) {
    counterAdd++;
    const numbersSplit = n.toString().split('')
    const numArr = numbersSplit.map(Number);
    let total = 0;
    for (let i = 0; i < numArr.length; i++) {
      total += numArr[i];
    }
    n = total;
  }
  return counterAdd;
}

function multiplicativePersistence(n) {
  let counterMult = 0;
  while (n >= 10) {
    counterMult++
    const numbersSplit = n.toString().split('')
    const numArr = numbersSplit.map(Number);
    let total = numArr[0];
    for (let i = 1; i < numArr.length; i++) {
      total = total * numArr[i];
    }
    n = total;
  }
  return counterMult;
}
