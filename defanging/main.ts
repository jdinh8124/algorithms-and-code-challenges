// function defangIPaddr(address: string): string {
//     const splitArr: string[]  = address.split('');
//     let returnedString: string = "";
//     for (let i = 0; i < splitArr.length; i++){
//         if (splitArr[i] === ".") {
//             returnedString += "[.]";
//         } else {
//             returnedString += splitArr[i];
//         }
//     }
    
//     return returnedString
// };

function defangIPaddr(address: string): string {
    return address.split('.').join('[.]');
};