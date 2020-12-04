function maximum69Number (num: number): number {
    const split = num.toString().split('');
    const foundNum  = split.findIndex((stringNum) => stringNum === "6");
    
    if (foundNum > -1) {
        split[foundNum] = "9";
    }

    return parseInt(split.join(''), 10)
};


// function maximum69Number (num: number): number {
//     let str = num.toString();
//     let res = str.replace('6','9');
//     return Number(res);
// }