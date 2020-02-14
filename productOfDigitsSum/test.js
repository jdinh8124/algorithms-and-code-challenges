function sumDigProd(...args) {
  let total = args.reduce((incrementor, number) => {
    return incrementor + number
  });
  while (total >= 10) {
   let newArray = total.toString().split('');
    let newArrayNum = newArray.map(Number)
    let product = newArrayNum.reduce((incrementor, number) => {
      return incrementor * number;
    });
    total = product;
  }
  return total
}
