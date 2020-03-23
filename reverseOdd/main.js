function reverseOdd(str) {
  let arr = str.split(" ")
  let reverseArr = arr.map(item => {
    if (item.length % 2 == 0) {
      return item;
    } else {
      return item.split("").reverse().join("")
    }
  })
  return reverseArr.join(" ");
}
