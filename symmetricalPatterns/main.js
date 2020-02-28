function classifyRug(pattern) {
  let notImperfect = false;
  let notHoriz = false;
  let notVertSym = false;
  let notPerf = false;


  for(let i = 0; i < pattern[i].length ;i++){

    for(let w = 0; w < pattern.length ; w++){

    }

  }



  if(notVertSym && !notHoriz){
    return "horizontally symmetric";
  }
  if (!notVertSym && notHoriz){
    return "vertically symmetric";
  }
  if (!notVertSym && !notHoriz) {
    return "imperfect";
  }

  return "perfect";
}
