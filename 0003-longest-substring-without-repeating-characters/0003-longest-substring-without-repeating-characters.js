/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) => {
    let substring = new Map();
    
    let start = 0; // used to keep track of where our substring starts when removing chars from the Map
                   // no chars removed so our substring starts at index 0. if a char is removed then our substring starts at index 1 etc.
    let maxLength = 0;
    
    for (let i = 0; i < s.length; i++) { // loop through entire string once
        while (substring.has(s[i])) { // remove characters in the front of the Map 1 by 1 until the curr char is not in the Map
            substring.delete(s[start]) // Map.delete() is O(1) time complexity
            start += 1; // this allows us to remove letters to the left of curr char until the duplicate is removed.
                        // 1 is added to keep track of where the start index of the current substring is since s is not modified directly
                        // also because we cant delete based on indices for a Map otherwise I wouldve done substring.delete(0) multiple times;
        }
        substring.set(s[i]); // Map.has() is constant time complexity
        
        maxLength = Math.max(maxLength, substring.size);
    }
    
    return maxLength;
    
};