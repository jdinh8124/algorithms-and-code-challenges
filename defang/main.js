function defangIPaddr(address: string): string {
    const split = address.split('');
    let stringToReturn = ''
    for (let i = 0; i <split.length; i++) {
        if (split[i] === '.') {
            stringToReturn += `[${split[i]}]`
        } else {
            stringToReturn+= split[i]
        }
    }
    
    return stringToReturn;
};