function everyOther(inputString) {
    let count = 0;
    let stringCheck = "";

    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] !== stringCheck[stringCheck.length - 1]) {
            stringCheck += inputString[i];
        } else {
            count++;
        }
    }

    return count;
}

console.log(everyOther('yyyyy'))