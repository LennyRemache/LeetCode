/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// O(n) runtime where n is length of strings
// O(n) space where hashmap size is based on string size
const isAnagram = (s, t) => {
    
    // base case mustr check if both strings have the same # of letters to be an anagram
    if (s.length !== t.length) return false;
    
    // hashmap to keep track of unique letter occurrences
    const letterCount = {};
    
    // O(n) where is length of strings
    // loop to count available characters in s that t can use
    for(let letter of s) {
        // if letter is new then we defined it in the hashmap to keep track of
        if (letterCount[letter] === undefined) {
            letterCount[letter] = 0;
        }
        // increment letter occurrence count
        letterCount[letter] += 1;
    }
    
    // O(n) where n is length of strings
    // loop to check if all characters in s are used by t
    for(let letter of t) {
        // if character was not seen in s or was already used enough times by t
        if (letterCount[letter] === undefined || letterCount[letter] <= 0) return false
        // otherwise we can safely deduct the amount available of the current letter
        letterCount[letter] -= 1;
    }
    
    return true;
};