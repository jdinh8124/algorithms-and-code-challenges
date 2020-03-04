function keyboardShortcut(str) {
  debugger;
  let stringToReturn = "";
  const arrSplit = str.split(" ");
  let copied = false;
  let temp = "";
  let toAdd = "";
  for(let i = 0; i <arrSplit.length; i++){
    if(arrSplit[i] === "Ctrl"){
      temp = arrSplit[i] + arrSplit[i + 1] + arrSplit[i+2];
    }
    if(temp === "Ctrl+C"){
      copied = true;
      let sliced = arrSplit.slice(0,i);
      arrSplit.splice(i, i+2);
      sliced.map(item => {
        toAdd+= item + " "})
    } else if (copied && temp === "Ctrl+V"){
      stringToReturn += toAdd;
      stringToReturn += toAdd;
    }
  }
  return stringToReturn;
}


console.log(keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon"))
