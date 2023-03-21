/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    let count = {};
    
    for(let letter of s) {
        if (count[letter] === undefined) {
            count[letter] = 0;
        }
        count[letter] += 1;
    }
    
    let length = 0;
    let odd = false;
    
    for(let letter in count) {
        let num = count[letter];
        
        if (num % 2 === 0) {
            length += num;
        } else {
            odd = true;
            length += num - 1;
        }
    }
    
    return odd === true ? length + 1 : length;
};