/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    // T: O(2n) -> O(n)  S: O(n)
    let appeared = new Map();
    
    // substrings must be continous with no repeating characters
    let start = 0; // indicates the start index of a substring
    let end = 0; // indicate the end index of a substring
    
    let maxLength = 0; // used to store the max length of each substring without repeating characters
    
    // while our end index of a possible substring does not go out of bounds
    while (end < s.length) {
        let endChar = s[end];
        
        // if the current end char appeared previously in the current substring
        // then we must remove the start of the substring until we no longer have a repeated char
        while (appeared.has(endChar)) {
            appeared.delete(s[start]);
            start++;
        }
        // while loop will not run if the current ending char did not appear previously 
        // so we can safely store it in the appeared Map()
        
        appeared.set(endChar, true);
        maxLength = Math.max(maxLength, (end - start) + 1); // check current valid substring's length against maxLength
        end++; // increment the end index
    }
    
    return maxLength;
};