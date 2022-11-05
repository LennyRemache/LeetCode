/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let window = new Map();
    
    let start = 0;
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) { // loop through entire string once
        while (window.has(s[i])) { // remove characters in the front of the Map 1 by 1 until the curr char is not in the Map
            window.delete(s[start])
            start += 1; // this 
        }
        window.set(s[i]); // Map.has() is constant time complexity
        
        maxLength = Math.max(maxLength, window.size);
    }
    
    return maxLength;
    
};