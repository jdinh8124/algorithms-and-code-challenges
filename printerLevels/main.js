function inkLevels(inks) {
  let arrayOfNums = []
  for (const key in inks) {
    arrayOfNums.push(inks[key])
  }
  let smallest = arrayOfNums[0];
  for (let i = 1; i < arrayOfNums.length; i++) {
    if (arrayOfNums[i] < smallest) {
      smallest = arrayOfNums[i];
    }
  }
  return smallest;
}
