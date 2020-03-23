function reverseOdd(str) {
  let arr = str.split(" ")
  let reverseArr = arr.map(item => {
    if (item.length % 2 != 0) {
      return item.split("").reverse().join("")
    }
    return item
  })
  return reverseArr.join(" ");
}
console.log(reverseOdd("One two three four"))
