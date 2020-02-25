function removeLastVowel(str) {
  const arrToReturn = [];
  const newArr = str.split(" ");
  debugger;
  let newString;
   for(let i = 0; i < newArr.length; i++){
     let numberToRemove = newArr[i].indexOf("a" || "e" || "i" || "o" || "u" || "A" || "E" || "I" || "O" || "U");
     if(numberToRemove === 0){
        newString = newArr[i].slice(numberToRemove);
     }else if (numberToRemove === -1){
       arrToReturn.push(newArr[i]);
     }
     else{
       newString = newArr[i].slice(0, numberToRemove - 1) + newArr[i].slice(numberToRemove);
     }
    arrToReturn.push(newString)
    }
}


console.log(removeLastVowel("Those who dare to fail miserably can achieve greatly."))
