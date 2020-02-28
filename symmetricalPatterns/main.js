function classifyRug(pattern) {
  // let notImperfect = false;
  let notHoriz = false;
  let notVertSym = false;
  // let notPerf = false;
debugger;

  for(let i = 0; i < pattern.length ;i++){
    for(let w = 0; w < pattern[0].length ; w++){
      if(pattern[i][w] !== pattern[i][0]){
        notHoriz = true;
      }
    }
  }

  for (let i = 0; i < pattern[0].length; i++) {
    for (let w = 0; w < pattern.length; w++) {
      if (pattern[0][i] !== pattern[w][i]) {
        notVertSym = true;
      }
    }
  }


//   if(notVertSym && !notHoriz){
//     return "horizontally symmetric";
//   }
//   if (!notVertSym && notHoriz){
//     return "vertically symmetric";
//   }
//   if (!notVertSym && !notHoriz) {
//     return "imperfect";
//   }

// if(pattern[0][1] === pattern[1][0]){
//   return "perfect";
// }
// }


console.log(classifyRug([
  ['a', 'a', 'b'],
  ['a', 'a', 'b']
]))
