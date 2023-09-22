/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    
    if (s.length !== t.length) return false;
    
    const letterCount = {};
    
    for(let letter of s) {
        if (letterCount[letter] === undefined) {
            letterCount[letter] = 0;
        }
        letterCount[letter] += 1;
    }
    
    for(let letter of t) {
        if (letterCount[letter] === undefined) return false
        
        letterCount[letter] -= 1;
        if(letterCount[letter] < 0) return false;
    }
    
    return true;
};