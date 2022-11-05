/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let substring = new Map();
    
    let start = 0;
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) { // loop through entire string once
        while (substring.has(s[i])) { // remove characters in the front of the Map 1 by 1 until the curr char is not in the Map
            substring.delete(s[start])
            start += 1; // this 
        }
        substring.set(s[i]); // Map.has() is constant time complexity
        
        maxLength = Math.max(maxLength, substring.size);
    }
    
    return maxLength;
    
};