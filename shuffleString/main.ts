function restoreString(s: string, indices: number[]): string {
    let stringToReturn: Array<any> = s.split('');

    for (let i = 0; i < indices.length; i++) {
        stringToReturn[indices[i]] = s[i];
    }

    return stringToReturn.join("");
};