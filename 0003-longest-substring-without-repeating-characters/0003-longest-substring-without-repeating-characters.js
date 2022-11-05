/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    
    if (s.length === 0) return 0;
    if (s.length === 1) return 1;
    
    let window = new Map();
    
    let start = 0;
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) {
        while (window.has(s[i])) {
            window.delete(s[start])
            start += 1;
        }
        window.set(s[i]); // Map.has() is constant time complexity
        
        maxLength = Math.max(maxLength, i - start + 1);
    }
    
    return maxLength;
    
};