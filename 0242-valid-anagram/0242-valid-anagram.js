/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    // T: O(n + m)  S: O(n)
    
    let letterFreq = {};
    
    for (let letter of s) {
        if (letterFreq[letter] === undefined) letterFreq[letter] = 1;
        else letterFreq[letter] += 1;
    }
    
    for (let letter of t) {
        if (letterFreq[letter] === undefined || letterFreq[letter] === 0) return false;
        letterFreq[letter] -= 1;
    }
    
    for (let letter in letterFreq) {
        if (letterFreq[letter] > 0) return false;
    }
    
    return true;
};