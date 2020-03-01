function isWristband(arr) {
let notHoriz = false;
let notVertSym = false;
let leftDig = false;
let rightDig = false;

for (let i = 0; i < arr.length; i++) {
  for (let w = 0; w < arr[0].length; w++) {
    if (arr[i][w] !== arr[i][0]) {
      notHoriz = true;
    }
  }
}

for (let i = 0; i < arr[0].length; i++) {
  for (let w = 0; w < arr.length; w++) {
    if (arr[0][i] !== arr[w][i]) {
      notVertSym = true;
    }
  }
}
let same = true;
  for (let i = 0; i < arr.length - 1; i++) {
    let indexToCompare = 1;
    for (let w = i + 1; w < arr[0].length; w++) {
      if (arr[i][0] !== arr[w][indexToCompare]) {
          same = false;
      }
      indexToCompare++
    }
  }
  if (same) {
    leftDig = true;
  }
  let sameRight = true;
  for (let i = 0; i < arr.length - 1; i++) {
    let indexToCompare = arr[0].length - 2;
    let startNextRow = i + 1;
    for (let w = arr[0].length -1 ; w > 0; w--) {
      if(startNextRow <= arr.length - 1){
      if (arr[i][arr[0].length-1] !== arr[startNextRow][indexToCompare]) {
        sameRight = false;
      }
    }
      indexToCompare--;
      startNextRow++;
    }
  }
  if (sameRight) {
    rightDig = true;
  }

if(leftDig || rightDig){
  return true;
}
if(notHoriz && notVertSym){
  return false;
}
return true;
}
