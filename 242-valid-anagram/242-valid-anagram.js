/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    
    const sFreq = {};
    const tFreq = {};
    
    for(let i = 0; i < s.length; i++) {
        if (!sFreq[s[i]]) {
            sFreq[s[i]] = 1;
        } else {
           sFreq[s[i]] += 1; 
        }
        
        if (!tFreq[t[i]]) {
            tFreq[t[i]] = 1;
        } else {
           tFreq[t[i]] += 1; 
        }
    }
    
    for (let char in sFreq) {
        if (sFreq[char] !== tFreq[char]) return false
    }
    
    return true;
};