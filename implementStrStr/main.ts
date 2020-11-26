function strStr(haystack: string, needle: string): number {
    if (needle.length === 0) {
        return 0;
    }

    if(haystack.includes(needle)) {
        return haystack.indexOf(needle);
    }

    return -1;
};