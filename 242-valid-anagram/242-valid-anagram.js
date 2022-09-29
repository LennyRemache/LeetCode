/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    
    const letterFreq = {};
    
    for(let i = 0; i < s.length; i++) {
        if (!letterFreq[s[i]]) {
            letterFreq[s[i]] = 1;
        } else {
           letterFreq[s[i]] += 1; 
        }
    }
    
    for(let j = 0; j < t.length; j++) {
        if (letterFreq[t[j]]) {
            letterFreq[t[j]] -= 1; 
        }   
    }
    
    for (let char in letterFreq) {
        if (letterFreq[char] !== 0) return false;
    }
    
    return true;
};