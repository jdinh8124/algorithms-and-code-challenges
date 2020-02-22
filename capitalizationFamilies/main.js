function grouping(words) {
  const objToPush ={};
  let numToPush = 0;
  const arrToReturn = [];
  for(let i = 0; i < words.length ; i++){
    numToPush = 0;
    for(let w = 0; w < words[i].length; w++){
      if(words[i].charCodeAt([w]) < 91 ){
        numToPush++;
      }
    }
    if(!objToPush[numToPush]){
      objToPush[numToPush] = [words[i]]
    }else{
      let newArr = objToPush[numToPush];
      newArr.push(words[i]);
      objToPush[numToPush] =  newArr;
    }
  }

  for(const key in objToPush){
		const sortedArr = objToPush[key].sort(function(a, b) {
  var nameA = a.toUpperCase();
  var nameB = b.toUpperCase();
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }
  return 0;
})

    arrToReturn.push([parseInt(key), sortedArr])
  }
  return arrToReturn
}
