/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// T: O(n) since both loops we can assume iterate over strings of the same length so n+n simplifies to just n overall.
// S: O(n) worse case since if s were to have unique letters at each index then count would depend on the size of input n

const isAnagram = (s, t) => {
    // base case is that both strings must be of same length in order
    // to even have a chance at being an anagram of another
    if(s.length !== t.length) return false;
    
    let count = {}; // store letter counts of s
    
    // count how many of each letter appears in s
    for(let letter of s) {
        if (count[letter] === undefined) count[letter] = 0;
        count[letter] += 1;
    }
    
    // now check if there are an exact amount of each letter in t to recreate s
    for (let letter of t) {
        if (count[letter] === undefined || count[letter] === 0) return false;
        count[letter] -= 1;
    }
    
    // if we reach here then we validated that t is an anagram of s
    return true;
};