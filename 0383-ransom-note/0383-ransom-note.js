/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
const canConstruct = (ransomNote, magazine) => {
    let count = {};
    
    for (let letter of magazine) {
        if (count[letter] === undefined) {
            count[letter] = 0;
        }
        count[letter] += 1;
    }
    
    for(let letter of ransomNote) {
        if (count[letter] === undefined || count[letter] === 0) return false;
        count[letter] -= 1;
    }
    
    return true;
};