// function maximumWealth(accounts: number[][]): number {
//     let max = 0;
    
//     accounts.forEach((element) => {
//         let count = 0
//         element.forEach((item) => {
//             count += item;
//         })
//         if (count > max) {
//             max = count;
//         }
//     })
    
//     return max;
// };

function maximumWealth(accounts: number[][]): number {
    let max = 0;
    
    accounts.forEach((element) => {
        let count = element.reduce((total, current) => total + current)
        
        if (count > max) {
            max = count;
        }
    })
    
    return max;
};