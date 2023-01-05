/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

const wordBreak = (s, wordDict) => {
    // T: O(n*m)
    // S: O(n)
    let dp = new Array(s.length + 1).fill(false);
    
    dp[0] = true; // base case
    
    for(let i = 0; i < dp.length; i++) {
        if (dp[i] === false) {
            continue;
        }
        
        for(let j = i + 1; j < dp.length; j++) {
            if (wordDict.includes(s.slice(i, j))) {
                dp[j] = true;
            }
            
        }
    }
    return dp[dp.length-1];
}