function keyboardShortcut(str) {
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
      debugger;
      arrSplit.splice(i, 3);
      sliced.map(item => {
        toAdd+= item + " "})
      temp = "";
      i = i - 1;
    } else if (copied && temp === "Ctrl+V"){
      stringToReturn += toAdd;
      temp = "";
      arrSplit.splice(i, 3);
      i = i - 1;
    }else{
      stringToReturn += arrSplit[i] + " ";
    }
  }
  return stringToReturn.trimEnd();
}


console.log(keyboardShortcut("the egg and Ctrl + C Ctrl + V the spoon"))
