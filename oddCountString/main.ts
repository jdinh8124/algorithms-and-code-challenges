function generateTheString(n: number): string {
    let stringToReturn = ''

    for (let i = 0; i < n; i++) {
        if (n % 2 !== 0 || n - i > 1) {
            stringToReturn += 'a'
        } else {
            stringToReturn += 'b'
        }
    }

    return stringToReturn
};