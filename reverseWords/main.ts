function reverseWords(s: string): string {
    const splitArr = s.split(' ');
    const reversed = splitArr.map((string) => {
        return string.split('').reverse().join('')
    })
    return reversed.join(' ');
};