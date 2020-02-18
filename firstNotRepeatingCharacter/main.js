function firstNotRepeatingCharacter(s) {
  let found = false;
  for (let i = 0; i < s.length; i++) {
    found = false;
    for (let k = 0; k < s.length; k++) {
      if (s[i] === s[k]) {
        if(i !== k){
          found = true;
        }
      }
    }
    if (!found) {
      return s[i]
    }

  }
  return '_'
}

console.log(firstNotRepeatingCharacter("abacabaabacaba"))
