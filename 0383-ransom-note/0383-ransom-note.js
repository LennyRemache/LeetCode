/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let magFreq = {}
    
    for (let i = 0; i < magazine.length; i++) {
        if (magFreq[magazine[i]] === undefined) {
            magFreq[magazine[i]] = 1;
        } else {
            magFreq[magazine[i]] += 1;
        }
    }
    
    for (let j = 0; j < ransomNote.length; j++) {
        if (magFreq[ransomNote[j]] === undefined || magFreq[ransomNote[j]] === 0) return false;
        magFreq[ransomNote[j]] -= 1;
    }
    
    return true;
};