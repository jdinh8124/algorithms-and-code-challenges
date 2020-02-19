function sumOfTwo(a, b, v) {

  let newObj = {};
  for (let i = 0; i < a.length; i++) {
    newObj[a[i]] = a[i];
  }

  for (let i = 0; i < b.length; i++) {
    for (let key in newObj) {
      if ((newObj[key] + b[i]) === v) {
        return true;
      }
    }

  }

  return false;
}

console.log(sumOfTwo([1, 2, 3], [10, 20, 30, 40], 42))
