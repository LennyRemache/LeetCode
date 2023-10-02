/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    
    const letterFreq = new Array(26).fill(0); // O(1) space since it will always be of length 26 for all 26 lowercase letters
    
    for(let i = 0; i < s.length; i++) {
        const indexS = s[i].charCodeAt(0) - 97;
        const indexT = t[i].charCodeAt(0) - 97;
        letterFreq[indexS] += 1;
        letterFreq[indexT] -= 1;
    }
    
    for(let i = 0; i < letterFreq.length; i++) {
        if (letterFreq[i] !== 0) return false;
    }
    
    return true;
};