function findFrequent(arr) {
  let numberOfTimes = 0;
  let highestNum = 0;
  let highest = null;

  for (let i = 0; i < arr.length; i++) {
     numberOfTimes = 0;
    for (let w = 0; w < arr.length; w++) {
      if (arr[i] === arr[w]) {
        numberOfTimes++
      }
    }
    if (highestNum < numberOfTimes) {
      highestNum = numberOfTimes;
      highest = arr[i];
    }
  }
  return highest;
}
