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
  debugger;
  let same = true;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let w = i + 1; w < arr[0].length; w++) {
      if (arr[i][0] !== arr[w][w]) {
          same = false;
      }
    }
  }
  if (same) {
    leftDig = true;
  }
  for (let i = arr[0].length - 1; i > 0; i--) {
    let numCheck = 0;
    for (let w = i -1 ; w > 0; w--) {
      if (arr[0][i] === arr[w][w]) {
        numCheck++
      }
    }
    if (numCheck >= 2) {
      rightDig = true;
    }

  }





if(leftDig || rightDig){
  return true;
}

if(notHoriz && notVertSym){
  return false;
}
return true;
}


console.log(isWristband(
[["A", "B", "C"],
  ["C", "A", "B"],
  ["B", "C", "A"],
  ["A", "B", "C"]]))
