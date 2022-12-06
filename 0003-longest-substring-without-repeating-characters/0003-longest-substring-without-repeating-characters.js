/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let prevSeen = new Map();
    let start = 0;
    let end = 0;
    
    let maxLength = 0;
    while (end < s.length) {
        const letter = s[end];

        while (prevSeen.has(letter)) {
            prevSeen.delete(s[start]);
            start++;
        }
        
        prevSeen.set(letter, true);
        maxLength = Math.max(maxLength, (end - start) + 1);
        end++;
    }
    
    return maxLength;
};