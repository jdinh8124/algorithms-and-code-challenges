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


// function judgeCircle(moves: string): boolean {
//     let x = 0;
//     let y = 0;
//     for(let i = 0; i < moves.length; i++) {
//         switch(moves[i]){
//             case 'U':
//                 y++;
//                 break
//             case 'D':
//                 y--;
//                 break
//             case 'L':
//                 x--;
//                 break
//             case 'R':
//                 x++;
//                 break;
//         }
//     }

//     return x === 0 && y === 0
// };

