function shuffle(nums: number[], n: number): number[] {
    const arrToReturn = [];

    for (let i = 0; i < nums.length / 2; i++) {
        arrToReturn.push(n[i], n[i + nums.length / 2])
    }

    return arrToReturn;
};