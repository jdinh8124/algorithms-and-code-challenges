function judgeCircle(moves: string): boolean {
    const objToCheck: {[key:string]: number} = {}

        for(let i = 0; i < moves.length; i++) {
            if(objToCheck[moves[i]] === undefined) {
                objToCheck[moves[i]] = 1;
            } else {
                objToCheck[moves[i]] +=1;
            }
        }

        return (objToCheck['U'] === objToCheck['D'] && objToCheck['L'] === objToCheck['R'])
};