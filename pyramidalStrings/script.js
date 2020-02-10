function pyramidalString(string, type) {
  let arrayToReturn = [];
  if (!string) {
    return arrayToReturn;
  } else if (string.length === 1) {
    arrayToReturn.push(string)
    return arrayToReturn
  }
  let counter = 1;
  let newArraySplit = string.split('');

  while (newArraySplit.length > 0) {
    if (counter > newArraySplit.length) {
      return "Error!"
    }
    let slicedItems = newArraySplit.splice(0, counter)
    let joinedSliced = slicedItems.join(" ")
    arrayToReturn.push(joinedSliced)
    counter++
  }

  if (type === "REV") {
    let lastString = arrayToReturn[arrayToReturn.length - 1]
    let spaceCount = (lastString.split(" ").length - 1)
    counter = lastString.length - spaceCount;
    arrayToReturn = [];
    newArraySplit = string.split("")
    while (newArraySplit.length > 0) {
      let newSlice = newArraySplit.splice(0, counter)
      let joinedSplice = newSlice.join(' ')
      arrayToReturn.push(joinedSplice)
      counter--
    }
  }
  return arrayToReturn;
}
