function cleave(str, words) {
  let stringToReturn = "";
  words.map(word => {
    let num = str.search("word");
    if(num > -1){
      if(!stringToReturn){
        stringToReturn = word;
      }else{
        stringToReturn += word;
      }
    }
  })




  return stringToReturn
}




const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion', 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']

console.log(cleave('solongandthanksforallthefish' , words))
