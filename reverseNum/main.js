function rev(n) {
  return Math.abs(n).toString().split('').reverse().join('')
}


// function rev(n) {
//   let negative = false;
//   if (n.toString()[0] === '-') {
//     negative = true;
//   }
//   let num = n.toString().split('').reverse().join('')
//   if (negative) {
//     let numArr = num.split('')
//     numArr.pop()
//     num = numArr.join('')
//   }
//   return num;
// }
