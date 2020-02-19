function sumOfTwo(a, b, v) {
  const arrToCheck = [];
  for (let i = 0; i < a.length; i++) {
    for (let w = 0; w < b.length; w++) {
      arrToCheck.push(a[i] + b[w]);
    }
  }


  if (arrToCheck.includes(v)) {
    return true
  }
  return false;
}


console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42))
