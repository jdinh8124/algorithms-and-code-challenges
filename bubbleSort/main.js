function bubbleSort(arr) {
  let changes = true;
  while (changes) {
    changes = false
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        changes = true;
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
      }
    }
  }
  return arr;
}



console.log(bubbleSort([1, 0, 5, 7]))
