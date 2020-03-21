let myArray = ['cat', 'caterpillar', 'whale', 'accurate', 'smile', 'cactus', 'cute'];
function fittingWords(word, array) {
  let arrayToPush = [];
  for (let i = 0; i < array.length; i++) {
    let counter = 0
    for (let w = 0; w < word.length; w++) {
      for (let x = 0; x < array[i].length; x++) {
        if (word[w] === array[i][x]) {
          counter++;
        }
      }
    }
    if (word.length <= counter) {
      arrayToPush.push(array[i]);
    }
  }
  return arrayToPush;
}
