function scrambled(word1, word2){
  debugger;
  if(word1.length !== word2.length){
    return false;
  }
  const obj = {};
  for(let i = 0; i < word1.length; i++){
    obj[word1[i]] = obj[word1[i]] + 1 ||  1;
    if (obj[word2[i]] > 0){
      obj[word2[i]] = obj[word2[i]] - 1;
    }else{
      obj[word2[i]] =  -1;
    }
  }

  for (let i = 0; i < word1.length; i++) {
    if (obj[word1[i]] !== 0){
      return false
    }
  }
  return true;
}


console.log(scrambled('word', 'dorw'))
