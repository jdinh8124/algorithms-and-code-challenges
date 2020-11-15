// function sortArrayByParity(A: number[]): number[] {
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] % 2 != 0) {
//             A.unshift(A[i])
//             A.splice(i + 1, 1)
//         }
//     }

//     return A.reverse();
// };

// const sortArrayByParity = A => A.filter(e=>e%2==0).concat(A.filter(e=>e%2==1))



var sortArrayByParity = function(A) {
    let even = A.filter(a => a % 2 === 0);
    let odd = A.filter(a => a % 2 === 1);
    return even.concat(odd);
};