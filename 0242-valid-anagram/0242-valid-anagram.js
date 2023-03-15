/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = (s, t) => {
    if(s.length !== t.length) return false;
    
    let count = {};
    
    for(let letter of s) {
        if (count[letter] === undefined) count[letter] = 0;
        count[letter] += 1;
    }
    
    for (let letter of t) {
        if (count[letter] === undefined || count[letter] === 0) return false;
        count[letter] -= 1;
    }
    
    return true;
};