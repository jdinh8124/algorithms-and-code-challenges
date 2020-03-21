function fittingWords(word, array) {
  let arrayToPush = [];
  let contains = true;
  for (let i = 0; i < array.length; i++) {
      contains = true;
    for(let w = 0; w < word.length; w++){
      if(!array[i])
    }
    if (contains) {
      arrayToPush.push(array[i])
    }
  }
  return arrayToPush;
}

let myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];
