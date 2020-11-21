function moveZeroes(nums: number[]): void {
    let zeroes = [];
    for(let i = 0 ; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1)
            zeroes.push(0)
            i--
        } 
    }
    nums.push(...zeroes)
};