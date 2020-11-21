function containsDuplicate(nums: number[]): boolean {
    const checkObj: {[key: string]: number} = {};

    for(let i = 0; i < nums.length; i++ ){
        if(checkObj[nums[i]] !== undefined) {
            return true;
        } else {
            checkObj[nums[i]] = nums[i]
        }
    }
    return false;
};