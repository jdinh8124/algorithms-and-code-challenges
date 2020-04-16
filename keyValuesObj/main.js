function objectToArray(object) {
  const arrToReturn = [];
  for (let key in object) {
    let arrToPush = [key, object[key]];
    arrToReturn.push(arrToPush);
  }
  return arrToReturn;
}
