function numToEng(n) {
  let wordToReturn = "";
  let numString = "" + n;
  function numCheck(x) {
    switch (x) {
      case "0":
        wordToReturn += "zero";
        break;
      case "1":
        wordToReturn += "one";
        break;
      case "2":
        wordToReturn += "two";
        break;
      case "3":
        wordToReturn += "three";
        break;
      case "4":
        wordToReturn += "four";
        break;
      case "5":
        wordToReturn += "five";
        break;
      case "6":
        wordToReturn += "six";
        break;
      case "7":
        wordToReturn += "seven";
        break;
      case "8":
        wordToReturn += "eight";
        break;
      case "9":
        wordToReturn += "nine";
        break;
    }
  }
  function numTwoCheck(x) {
    switch (x) {
      case "2":
        wordToReturn += "twenty";
        break;
      case "3":
        wordToReturn += "thirty";
        break;
      case "4":
        wordToReturn += "fourity";
        break;
      case "5":
        wordToReturn += "fifty";
        break;
      case "6":
        wordToReturn += "sixty";
        break;
      case "7":
        wordToReturn += "seventy";
        break;
      case "8":
        wordToReturn += "eighty";
        break;
      case "9":
        wordToReturn += "ninety";
        break;
    }
  }

  function numOneDigitCheck(x) {
    switch (x) {
      case "10":
        wordToReturn += "ten";
        break;
      case "11":
        wordToReturn += "eleven";
        break;
      case "12":
        wordToReturn += "twelve";
        break;
      case "13":
        wordToReturn += "thriteen";
        break;
      case "14":
        wordToReturn += "fourteen";
        break;
      case "15":
        wordToReturn += "fifteen";
        break;
      case "16":
        wordToReturn += "sixteen";
        break;
      case "17":
        wordToReturn += "seventeen";
        break;
      case "18":
        wordToReturn += "eighteen";
        break;
      case "19":
        wordToReturn += "nineteen";
        break;
    }
  }

debugger;
  if(numString.length === 1){
    numCheck(numString)
  } else if (numString.length === 3 && numString[1] === "0"){
    numCheck(numString[0])
    wordToReturn += " hundred ";
    numCheck(numString[2])
  } else if (numString.length === 3 && numString[1] === "1"){
    numCheck(numString[0])
    wordToReturn += " hundred ";
    numOneDigitCheck(numString[1] + numString[2] )
  } else if (numString.length === 2 && numString[0] === "1"){
    numOneDigitCheck(numString[1] + numString[2])
  }else if (numString.length === 3 && numString[1] !== "1") {
    numCheck(numString[0])
    wordToReturn += " hundred ";
    numTwoCheck(numString[1])
    numCheck(numString[2])
  }else{
    numTwoCheck(numString[0])
    wordToReturn += " ";
    numCheck(numString[1])
  }


return wordToReturn;
}

console.log(numToEng(103));
