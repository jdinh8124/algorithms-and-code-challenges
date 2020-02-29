function nextNumber(num) {
  const arrAllOpt = [];
  let numberStringed = num.toString();
  function getAllPermutations(string) {
    var results = [];

    if (string.length === 1) {
      results.push(string);
      return results;
    }

    for (var i = 0; i < string.length; i++) {
      var firstChar = string[i];
      var charsLeft = string.substring(0, i) + string.substring(i + 1);
      var innerPermutations = getAllPermutations(charsLeft);
      for (var j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }
  let combos = getAllPermutations(numberStringed);
  const numberedArr = combos.map(Number);
  numberedArr.sort();
  let found = numberedArr.findIndex(item => item === num);
  debugger;
  if(found === numberedArr.length - 1){
    return num;
  }else{
    if (numberedArr[found + 1] === num){
      return numberedArr[found + 2]
    }else{
      return numberedArr[found + 1];
    }
  }
}

console.log(nextNumber(1115))





// if (num.length === 2) {
//   let numberStringed = num.toString();
//   const arrayOfNums = numberStringed.split("")
//   const numberedArr = arrayOfNums.map(Number);
//   numberedArr.sort();

//   let numString = ""
//   for (let i = numberedArr.length - 1; i > 0; i--) {
//     numString += numberedArr[i];
//   }
//   return parseInt(numString);
// }
