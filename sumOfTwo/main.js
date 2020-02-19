function sumOfTwo(a, b, v) {
  const objToCheck = {};
  for (let i = 0; i < a.length; i++) {
    objToCheck[v - a[i]] = [v - a[i]];
  }

  for (let i = 0; i < b.length; i++) {
    if (objToCheck.hasOwnProperty(b[i])) {
      return true
    }
  }
  return false;
}


//Optimize to pass interview speed checkers by not nesting for loops
