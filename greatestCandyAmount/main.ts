function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    const greatest =  Math.max(...candies)
    return candies.map((candy) => {
        return candy + extraCandies >= greatest
    })
};




// function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
//     const greatestNum = [...candies].sort((a,b) => a-b)[candies.length - 1];

//     return candies.map((candy) => {
//         return candy + extraCandies >= greatestNum
//     })
// };