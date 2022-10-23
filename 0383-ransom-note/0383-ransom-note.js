/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    const letterFreq = {}
    
    for(let letter of magazine) {
        if (letterFreq[letter] === undefined) letterFreq[letter] = 1;
        else letterFreq[letter] += 1;
    }
    
    for (let letter of ransomNote) {
        if (letterFreq[letter] === undefined || letterFreq[letter] === 0) return false;
        letterFreq[letter] -= 1;
    }
    
    return true;
};