function removeLastVowel(str) {
  const arrToReturn = [];
  const newArr = str.split(" ");
  let newString;
  let foundArray =[];
  let wordToCheck;
   for(let i = 0; i < newArr.length; i++){
     foundArray = []
     wordToCheck = newArr[i].split("").reverse().join("")
      foundArray.push(wordToCheck.toLowerCase().indexOf("a"));
      foundArray.push(wordToCheck.toLowerCase().indexOf("e"));
      foundArray.push(wordToCheck.toLowerCase().indexOf("i"));
      foundArray.push(wordToCheck.toLowerCase().indexOf("o"));
      foundArray.push(wordToCheck.toLowerCase().indexOf("u"));
      let numberToRemove = null;
      foundArray.sort()
        for(let i = 0; i < foundArray.length; i++){
          if(numberToRemove === null || numberToRemove === -1){
            numberToRemove = foundArray[i]
          }
        }
     if(numberToRemove === 0){
        newString = wordToCheck.slice(numberToRemove + 1);
       arrToReturn.push(newString.split("").reverse().join(""))
     }else if (numberToRemove === -1){
       arrToReturn.push(wordToCheck.split("").reverse().join(""));
     }
     else{
       newString = wordToCheck.slice(0, numberToRemove) + wordToCheck.slice(numberToRemove + 1);
       arrToReturn.push(newString.split("").reverse().join(""))
     }
    }
    return arrToReturn.join(" ");
}


console.log(removeLastVowel("If you want to live a happy life, tie it to a goal, not to people."))
