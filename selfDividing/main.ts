function selfDividingNumbers(left: number, right: number): number[] {
    let arrToReturn: Array<number> = [];
    let numToCheck = left;
    for (let i = left; i <= right; i++) {
        if (!numToCheck.toString().includes('0')) {
            arrToReturn.push(numToCheck);
        }
        numToCheck++;
    }

    arrToReturn = arrToReturn.filter((num) => {
        const nonZeroNum = num.toString();
        let remainder = false;
        for (let i = 0; i < nonZeroNum.length; i++) {
            if (num % parseInt(nonZeroNum[i]) != 0) {
                remainder = true;
            }
        }

        if (!remainder) {
            return num;
        }

    })
    
    return arrToReturn
};
