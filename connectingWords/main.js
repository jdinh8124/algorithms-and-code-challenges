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
  }



  arrayToReturn.push(stringToPush, numToReturn);
}

console.log(join(["to", "ops", "psy", "syllable"]))
