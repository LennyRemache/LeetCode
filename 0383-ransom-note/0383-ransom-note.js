/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magFreq = {};
    
    for (let letter of magazine) {
        if (magFreq[letter] === undefined) magFreq[letter] = 1;
        else magFreq[letter] += 1;
    }
    
    for (let letter of ransomNote) {
        if (magFreq[letter] === undefined || magFreq[letter] <= 0) return false;
        magFreq[letter] -= 1;
    }
    
    return true;
};