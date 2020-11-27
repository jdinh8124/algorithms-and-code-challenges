function fizzBuzz(n: number): string[] {
    const arrToReturn = [];
    for (let i = 1; i <= n; i++) {
        if (i % 5 == 0 && i % 3 == 0) {
            arrToReturn.push('FizzBuzz');
            continue;
        } else if (i % 5 == 0) {
            arrToReturn.push('Buzz');
            continue;

        } else if (i % 3 == 0) {
            arrToReturn.push('Fizz');
            continue;
        }

        arrToReturn.push(i.toString());
    }

    return arrToReturn;
};