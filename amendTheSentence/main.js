function amendTheSentence(s) {
  let newString = "";
  let splitArr = s.split("")

  splitArr.map(letter => {
    if (letter.charCodeAt(0) < 91 && newString) {
      newString += " " + letter;
    } else {
      newString += letter
    }
  })

  return newString.toLowerCase();
}
