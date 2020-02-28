function nextNumber(num) {
  let numberStringed =  num.toString();
  const arrayOfNums = numberStringed.split("")
  const numberedArr = arrayOfNums.map(Number);
  numberedArr.sort();

  let numString =""
  for(let i = numberedArr.length -1; i > 0; i--){
    numString += numberedArr[i];
  }
  return parseInt(numString);
}
