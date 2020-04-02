function selectLetters(s1, s2) {
  debugger;
  let stringToReturn = "";
  let length;
  if(s1.length > s2.length){
    length = s2.length;
  }else{
    length = s1.length;
  }
  for (let i = 0; i < length; i++) {
    if (s1[i] === s1[i].toUpperCase() && isNaN(parseInt(s1[i])) ) {
      stringToReturn += s2[i];
    }
  }

  for (let i = 0; i < length; i++) {
    if (s2[i] === s2[i].toUpperCase() && isNaN(parseInt(s2[i]))) {
      stringToReturn += s1[i];
    }
  }

  return stringToReturn;
}

console.log(selectLetters("1234567", "XxXxX"))
