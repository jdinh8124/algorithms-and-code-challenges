/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
var arrayStringsAreEqual = function(word1, word2) {
    let word1Joined = word1.join('');
    let word2Joined = word2.join('');
    const objectCounts = {};

    if (word1Joined.length !== word2Joined.length) {
        return false;
    }

    for (let i = 0; i < word1Joined.length; i++) {
        if (objectCounts[word1Joined[i]]) {
            objectCounts[word1Joined[i]]++;
        } else {
            objectCounts[word1Joined[i]] = 1;
        }

        if (objectCounts[word2Joined[i]]) {
            objectCounts[word2Joined[i]]--;
        } else {
            objectCounts[word2Joined[i]] = -1;
        }
    }

    for (const prop of objectCounts) {
        if (objectCounts[prop]) {
            return false;
        }
    }
    
    return true;
};