function cleave(str, words) {
  debugger
  let stringToReturn = "";
  for(let i = 0; i < str.length; i++){
    let letterPlusWord = str[i];
    let foundWord;
    let foundIndex;
    let foundWordIndex;
    for(let w = i+1; w < str.length; w++){
      letterPlusWord  += str[w];
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




const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']

console.log(cleave('solongandthanksforallthefish' , words))



// function cleave(str, words) {
//   debugger;
//   let stringToReturn = "";
//   words.map(word => {
//     let found = false;
//     let num = str.search(word);
//     if (num > -1) {
//       if (!stringToReturn) {
//         stringToReturn = word;
//       } else {
//         stringToReturn += " " + word;
//       }
//     }
//   })
//   return stringToReturn
// }
