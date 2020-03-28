function cleave(str, words) {
  let stringToReturn = "";
  for(let i = 0; i < str.length; i++){
    let letterPlusWord = str[i];
    let foundWord;
    let foundIndex;
    let foundWordIndex;

    for(let w = i; w < str.length; w++){
      if(w !== i ){
        letterPlusWord += str[w];
      }
      let num = words.findIndex(word => word === letterPlusWord);
      if(num > -1){
        foundWord = letterPlusWord;
        foundIndex = w;
        foundWordIndex = num;
      }

      if(w === str.length - 1 && foundWord){
        if (!stringToReturn) {
          stringToReturn = words[foundWordIndex]
        } else {
          stringToReturn += " " + words[foundWordIndex];
        }
        i = foundIndex;
      } else if (w === str.length - 1) {
        return 'Cleaving stalled: Word not found'
      }
    }
  }
  return stringToReturn
}
