function alternatingCaps(word) {
  let stringToReturn = "";
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (count === 0) {
      stringToReturn += word[i].toUpperCase();
      count++
    } else if (word[i] === " ") {
      stringToReturn += " ";
    } else if (count % 2 == 0) {
      stringToReturn += word[i].toUpperCase();
      count++;
    } else {
      stringToReturn += word[i].toLowerCase();
      count++;
    }
  }
  return stringToReturn;
}
