function nextNumber(num) {
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
  if(found === numberedArr.length - 1){
    return num;
  }else{
    if (numberedArr[found + 1] === num){
     const newArr = numberedArr.slice(found);
     let foundAgain = newArr.findIndex(item => item !== numberedArr[found]);
    let foundIndex = foundAgain + found;
    return numberedArr[foundIndex]
    }else{
      return numberedArr[found + 1];
    }
  }
}

console.log(nextNumber(1115))
