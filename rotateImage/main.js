function rotateImage(a) {
  const arrToReturn = [];

  for (let i = 0; i < a.length; i++) {
    arrToReturn.push([]);
  }
  let runTime = a.length * a[0].length;
  let num = 0;
  let whichArrNum = 0;
  for (let i = 0; i < runTime; i++) {
    arrToReturn[num].push(a[whichArrNum][num]);
    if (num === a[0].length - 1) {
      num = 0;
      whichArrNum ++;
    }else{
      num++;
    }
  }

  arrToReturn.map(items => {
    return items.reverse();
  })

  return arrToReturn
}




rotateImage([[1, 2, 3],
[4, 5, 6],
[7, 8, 9]])
