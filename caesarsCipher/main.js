function caesarCipher(s, k) {
let stringAlpha = "abcdefghijklmnopqrstuvwxyz".split("");
let stringToReturn = '';
debugger;
for(let i = 0; i < s.length; i++){
  let index = stringAlpha.findIndex(item => item === s[i].toLowerCase());
  if(index + k > 26){
    let numToReturn = index + k - 26;
    if(s.charCodeAt(i) < 97){
      stringToReturn += stringAlpha[numToReturn].toUpperCase();
    }else{
      stringToReturn += stringAlpha[numToReturn]
    }
  }
  else if (index === -1){
      if(s[i] === " "){
        stringToReturn += " "
      } else if (s[i] === "."){
        stringToReturn += "."
      }else{
        stringToReturn += "-"
      }
  }else{
    if (s.charCodeAt(i) < 97) {
      stringToReturn += stringAlpha[index + k].toUpperCase();
    } else {
      stringToReturn += stringAlpha[index + k]
    }
  }
}
return stringToReturn;
}

console.log(caesarCipher("One should not worry over things that have already happened and that cannot be changed.", 49))
