function highestOccurrence(arr) {
  let occur = 0;
  let arrToReturn = [];
  let current = 0;
  for (let i = 0; i < arr.length; i++) {
    occur = 0;
    for (let w = 0; w < arr.length; w++) {
      if (arr[i] === arr[w]) {
        occur++;
      }
    }
    if (occur > current) {
      if (!arrToReturn.includes(arr[i])) {
        arrToReturn = [];
        arrToReturn.push(arr[i]);
        current = occur;
      }
    } else if (occur === current) {
      if (!arrToReturn.includes(arr[i])) {
        arrToReturn.push(arr[i]);
      }
    }
  }
  return arrToReturn;
}

console.log(highestOccurrence(["it", "keeps", "coding", "on", "or", "it", "gets", "the", "hose"]))
