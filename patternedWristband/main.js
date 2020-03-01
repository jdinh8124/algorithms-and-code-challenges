function isWristband(arr) {
let notHoriz = false;
let notVertSym = false;
let leftDig = false;
let rightDig = false;
debugger;

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

if(leftDig || rightDig){
  return true;
}

if(notHoriz && notVertSym){
  return false;
}
return true;
}


console.log(isWristband(
  [['A', 'A'],
    ['B', 'B'],
    ['C', 'C'],
    ['D', 'B']]))
