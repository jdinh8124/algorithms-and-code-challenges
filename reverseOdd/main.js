function reverseOdd(str) {
  debugger;
  let arr = str.split(" ")
  arr.forEach(item => {
    if(!(item.length % 2)){
      return item.split("").reverse().join("")
    }
  })
}


console.log(reverseOdd("One two three four") )
