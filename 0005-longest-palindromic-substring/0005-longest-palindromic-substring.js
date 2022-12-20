/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    let maxLengthSubStr = '';
    
    for(let i = 0; i < s.length; i++) {
        // even palindromes
        let left = i;
        let right = i+1;
        while(left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                if (s.slice(left, right+1).length > maxLengthSubStr.length) {
                    maxLengthSubStr = s.slice(left, right+1);
                }
                //maxLength = Math.max((right-left) + 1, maxLength);
                left--;
                right++;
            } else break;
        }
        
        //odd palindromes
        left = i;
        right = i;
        while (left >= 0 && right < s.length) {
            if (s[left] === s[right]) {
                if (s.slice(left, right+1).length > maxLengthSubStr.length) {
                    maxLengthSubStr = s.slice(left, right+1);
                }
                //maxLength = Math.max((right-left) + 1, maxLength);
                left--;
                right++;
            } else break;
        }
    }
    
    return maxLengthSubStr;
};