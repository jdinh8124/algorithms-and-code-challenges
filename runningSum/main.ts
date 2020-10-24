// function runningSum(nums: number[]): number[] {
//     const runningArray: Array<number> = [];

//     nums.forEach((number, index) => {
//         let added: number

//         if(index) {
//          added =  number + runningArray[runningArray.length - 1]
//         } else {
//          added = number
//         }

//         runningArray.push(added)
//     })
//     return runningArray;
// };

function runningSum(nums: number[]): number[] {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums [i - 1]
    }
    return nums;
};