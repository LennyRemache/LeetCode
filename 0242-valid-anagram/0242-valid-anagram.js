/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    
    if (s.length !== t.length) return false;
    
    const letterFreq = {}
    
    for (let i = 0; i < s.length; i++) {
        if(letterFreq[s[i]] === undefined) letterFreq[s[i]] = 1;
        else letterFreq[s[i]] += 1;
    }
    
    for (let j = 0; j < t.length; j++) {
        if(letterFreq[t[j]] === undefined) return false;
        else letterFreq[t[j]] -= 1;
    }
    
    for (let letter in letterFreq) {
        if (letterFreq[letter] !== 0) return false;
    }
    
    return true;
};