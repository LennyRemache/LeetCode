/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// O(s+t) runtime where s and t are the respective lengths of the string parameters
// O(1) space since letterFreq array is fixed to length 26
const isAnagram = (s, t) => {
    if (s.length !== t.length) return false; // when s and t are not equal in length then there is not enough letters to begin with
    
    const letterFreq = new Array(26).fill(0); // O(1) space since it will always be of length 26 for all 26 lowercase letters
    
    // keep track of each letter use based on count
    for(let i = 0; i < s.length; i++) {
        // index based on char code - 97 since this gives the 0-index based value in letterFreq array
        const indexS = s[i].charCodeAt(0) - 97;
        const indexT = t[i].charCodeAt(0) - 97;
        letterFreq[indexS] += 1; // add 1 to signify having one more letter available
        letterFreq[indexT] -= 1; // subtract 1 to signify using one letter
    }
    
    // check each letter count to see if all letters are not overused or underused
    for(let i = 0; i < letterFreq.length; i++) {
        if (letterFreq[i] !== 0) return false;
    }
    
    return true;
};