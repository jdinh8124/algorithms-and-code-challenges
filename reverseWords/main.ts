// function reverseWords(s: string): string {
//     const splitArr = s.split(' ');
//     for (let i = 0 ; i <splitArr.length; i++) {
//         splitArr[i] = splitArr[i].split('').reverse().join('')
//     }
//     return splitArr.join(' ');
// };


// function reverseWords(s: string): string {
//     const splitArr = s.split(' ');
//     const reversed = splitArr.map((string) => {
//         return string.split('').reverse().join('')
//     })
//     return reversed.join(' ');
// };

function reverseWords(s: string): string {
    return s.split(' ').map(item=> item.split('').reverse().join('')).join(' ');
};