function join(arr) {
  let arrayToReturn = [];
  let stringToPush = "";
  let numToReturn = 0;
      stringToPush += arr[0];
  for(let i = 1 ; i <arr.length; i++){
    if(stringToPush.endsWith(arr[i][0])){
      let newWord = arr[i].slice(1);
      stringToPush += newWord;
      if(numToReturn > 1 || numToReturn === 0 ){
        numToReturn = 1;
      }
    }
    else if (stringToPush.endsWith((arr[i][0] + arr[i][1]) )) {
      let newWord = arr[i].slice(2);
      stringToPush += newWord;
      if (numToReturn > 2 || numToReturn === 0) {
        numToReturn = 2;
      }
    }
    else if (stringToPush.endsWith((arr[i][0] + arr[i][1] + arr[i][2]))) {
      let newWord = arr[i].slice(3);
      stringToPush += newWord;
      if (numToReturn > 3 || numToReturn === 0) {
        numToReturn = 3;
      }
    } else if (stringToPush.endsWith((arr[i][0] + arr[i][1] + arr[i][2] + arr[i][3]))) {
      let newWord = arr[i].slice(4);
      stringToPush += newWord;
      if (numToReturn > 4 || numToReturn === 0) {
        numToReturn = 4;
      }
    } else if (stringToPush.endsWith((arr[i][0] + arr[i][1] + arr[i][2] + arr[i][3] + arr[i][4]))) {
      let newWord = arr[i].slice(5);
      stringToPush += newWord;
      if (numToReturn > 5 || numToReturn === 0) {
        numToReturn = 5;
      }
    }else {
      stringToPush += arr[i];
    }
  }



  arrayToReturn.push(stringToPush, numToReturn);
  return arrayToReturn;
}

console.log(join(["abcde", "bcdefghi", "efghi", "fghij", "ghijklmnop"]))
