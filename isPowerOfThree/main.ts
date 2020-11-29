// function isPowerOfThree(n: number): boolean {
//     if (n >= 1) {
//         for (let i = 1; i <= n;) {
//             if (i === n) {
//                 return true
//             }
//             i = i * 3
//         }
//     }

//     return false;
// };

function isPowerOfThree(n: number): boolean {
return 0 < n && (3 ** 33) % n === 0
}