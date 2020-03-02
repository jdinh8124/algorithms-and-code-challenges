function caesarCipher(s, k) {
let stringAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
let stringToReturn = '';
for(let i = 0; i < s.length; i++){
  let index = stringAlpha.findIndex(item => item === s[i].toLowerCase());
  if (index === -1) {
    if (s[i] === " ") {
      stringToReturn += " "
    } else if (s[i] === ".") {
      stringToReturn += "."
    } else if (s[i] === ":") {
      stringToReturn += ":"
    } else if (s[i] === ",") {
      stringToReturn += ","
    }
    else {
      stringToReturn += "-"
    }
  }
  else if(index + k > 26){
    let numToReturn = index + k;
    while(numToReturn >= 26){
      numToReturn = numToReturn- 26;
    }
    if(s.charCodeAt(i) < 97){
      stringToReturn += stringAlpha[numToReturn].toUpperCase();
    }else{
      stringToReturn += stringAlpha[numToReturn]
    }
  }
  else{
    if (s.charCodeAt(i) < 97) {
      stringToReturn += stringAlpha[index + k].toUpperCase();
    } else {
      stringToReturn += stringAlpha[index + k]
    }
  }
}
return stringToReturn;
}
