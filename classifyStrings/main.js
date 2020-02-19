// function classifyStrings(s) {
//   let consectVowels = 0;
//   let consectConsts = 0;
//   let wildCard = 0;
//   debugger;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
//       consectVowels++;
//       consectConsts = 0;
//     } else if (s[i] === "?") {
//       wildCard++
//     } else {
//       consectConsts++;
//       consectVowels = 0;
//     }

//     if (consectConsts >= 5 || consectVowels >= 3) {
//       return "bad";
//     } else if (consectConsts >= 4 && wildCard > 0 || wildCard === 3) {
//       return "mixed"
//     } else if (consectVowels >= 2 && wildCard > 0) {
//       return "mixed"
//     }
//   }
//   return "good";
// }



function classifyStrings(s) {
  let consectVowels = 0;
  let consectConsts = 0;
  let wildCard = 0;
  let newString = "";
  let isConst = false
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a" || s[i] === "e" || s[i] === "i" || s[i] === "o" || s[i] === "u") {
      if (!isConst) {
        newString += s[i];
      } else {
        isConst = false;
        newString = "";
        newString += s[i];
      }
    }
    else if (s[i] === "?") {
      newString += "?";
    } else {
      if (isConst) {
        newString += s[i];
      } else {
        isConst = true;
        newString = "";
        newString += s[i];
      }
    }
  }
  debugger;
  for (let i = 0; i < newString.length; i++) {
    if (newString[i] === "a" || newString[i] === "e" || newString[i] === "i" || newString[i] === "o" || newString[i] === "u") {
      consectVowels++;
      consectConsts = 0;
    } else if (newString[i] === '?') {
      wildCard++
    } else {
      consectConsts++;
      consectVowels = 0;
    }
    if (consectConsts >= 5 || consectVowels >= 3) {
      return "bad";
    } else if (consectConsts >= 4 && wildCard > 0 || wildCard === 3) {
      return "mixed"
    } else if (consectVowels >= 2 && wildCard > 0) {
      return "mixed"
    }

  }





  return "good";
}




console.log(classifyStrings("lrsesknaiotmqanvt"))
