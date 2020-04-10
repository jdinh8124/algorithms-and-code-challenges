function progressDays(arr) {
  let progress = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > arr[i - 1]) {
      progress++
    }
    return progress;
  }
}
