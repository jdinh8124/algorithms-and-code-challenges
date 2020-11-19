function subtractProductAndSum(n: number): number {
    let sum = 0;
    let product = 1;
    let stringedNum = n.toString()
    for (let i = 0; i < stringedNum.length; i++){
        sum += parseInt(stringedNum[i], 10);
        product *= parseInt(stringedNum[i], 10)
    }

    return product - sum;
};




    // function subtractProductAndSum(n: number): number {
    //     return n.toString().split('').map(Number).reduce((a, b) => a * b) -
    //     n.toString().split('').map(Number).reduce((a, b) => a + b);
    // };
    