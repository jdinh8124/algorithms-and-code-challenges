function bucketize(phrase, n) {
  const arrayToReturn = [];
  const arraySplit = phrase.split(" ")
  if (arraySplit[0].length > n) {
    return arrayToReturn;
  }
  let stringToPush = "";

  for (let i = 0; i < arraySplit.length; i) {
    stringToPush = "";
    if (stringToPush.length === 0 && arraySplit[i].length <= n) {
      stringToPush += arraySplit[i];
    } else if ((stringToPush.length + arraySplit[i].length + 1) < n) {
      stringToPush = stringToPush + ' ' + arraySplit[i];
    }
    i += 1;
    while (arraySplit[i] && (stringToPush.length + arraySplit[i].length + 1) <= n) {
      stringToPush = stringToPush + ' ' + arraySplit[i];
      i += 1;
    }
    if (stringToPush.length > 0) {
      arrayToReturn.push(stringToPush)
    }
  }
  return arrayToReturn
}
