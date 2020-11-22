function reverse(x: number): number {
    if (x === 0) {
        return x;
    }

    let negative = x < 0 ? -1 : 1;

    let numStore = (x * negative + '').toString().split('').reverse().join('')
    let newNum = parseInt(numStore, 10) * negative;
    return newNum > 2147483647 || newNum < -2147483648 ? 0 : newNum
};