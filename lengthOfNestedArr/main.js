function getLength(arr) {
  const newArr = arr.flat(Infinity)
  return newArr.length;
}


console.log(getLength([1, [2, 3]]))
