/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const isAnagram = (s, t) => {
    if (s.length !== t.length) return false;
    
    const letterFreq = {};
    
    for(const letter of s) {
        if (letterFreq[letter] === undefined) {
            letterFreq[letter] = 0;
        }
        letterFreq[letter] += 1;
    }
   
    for(const letter of t) {
        if(letterFreq[letter] === undefined || letterFreq[letter] === 0) {
            return false;
        }
        letterFreq[letter] -= 1;
    }
    
    return true;
};