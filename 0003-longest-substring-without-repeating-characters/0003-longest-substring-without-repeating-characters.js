/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let appeared = new Map();
    let start = 0;
    let end = 0;
    
    let maxLength = 0;
    
    while (end < s.length) {
        let endChar = s[end];
        
        while (appeared.has(endChar)) {
            appeared.delete(s[start]);
            start++;
        }
        
        appeared.set(endChar, true);
        maxLength = Math.max(maxLength, (end - start) + 1);
        end++;
    }
    
    return maxLength;
};