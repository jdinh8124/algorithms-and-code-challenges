function insertWhitespace(s) {
  let returnVal = "";
  const newArr = s.split("");
  for (let i = 0; i < newArr.length; i++) {
    let stringCheck = "" + newArr[i];
    if (stringCheck.charCodeAt(0) < 97 && i !== 0) {
      returnVal += " " + newArr[i];
    } else {
      returnVal += newArr[i];
    }
  }
  return returnVal;
}
