function average(salary: number[]): number {
    let total = 0;
    let greatest = salary[0];
    let lowest = salary[0];

    for (let i = 0 ; i < salary.length; i++) {
        if (lowest > salary[i]) {
            lowest = salary[i]
        }

        if (greatest < salary[i]) {
            greatest = salary[i]
        }

        total += salary[i];
    }

    total -= greatest + lowest

    return total / (salary.length - 2);
};



// function average(salary: number[]): number {
//     salary.sort((a,b) => a-b);
//     let total = 0;
//     for (let i = 1 ; i < salary.length  - 1; i++) {
//         console.log(salary[i], salary)
//         total += salary[i];
//     }

//     return total / (salary.length - 2);
// };