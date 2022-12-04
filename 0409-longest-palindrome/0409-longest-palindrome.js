/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
    let freq = {};
    
    for (let letter of s) {
        if (freq[letter] === undefined) freq[letter] = 1;
        else freq[letter] += 1;
    }
    
    let res = 0;
    let odd = false;
    for (let letter in freq) {
        if (freq[letter] % 2 === 0) {
            res += freq[letter];
        } else {
            odd = true;
            res += freq[letter] - 1;
        }
    }
    
    return odd ? res + 1 : res;
};