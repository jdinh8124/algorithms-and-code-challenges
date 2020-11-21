// function singleNumber(nums: number[]): number {
//     if (nums.length === 1) {
//         return nums[0];
//     }
//     nums.sort((a,b) => a-b)

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== nums[i-1] && nums[i] !== nums[i+1]) {
//             return nums[i]
//         }
//     }
// };

// time O(n)
// space O(n)

function singleNumber(nums: number[]): number {
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if(obj[nums[i]] === undefined) {
            obj[nums[i]] = 1
        } else {
            obj[nums[i]] += 1;
        }
    }

    for (const prop in obj) {
        if (obj[prop] === 1) {
            return parseInt(prop);
        }
    }
};