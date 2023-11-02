/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) => {
    s = s.toLowerCase()
    
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        const isLeftNum = 48 <= s.charCodeAt(left) && s.charCodeAt(left) <= 57;
        const isRightNum = 48 <= s.charCodeAt(right) && s.charCodeAt(right) <= 57;
        
        const isLeftAlpha = 97 <= s.charCodeAt(left) && s.charCodeAt(left) <= 122;
        const isRightAlpha = 97 <= s.charCodeAt(right) && s.charCodeAt(right) <= 122;
        
        if (!isLeftNum && !isLeftAlpha) {
            left += 1;
        } else if (!isRightNum && !isRightAlpha) {
            right -= 1;
        } else if (s[left] === s[right]) {
            left += 1;
            right -= 1;
        } else {
            return false;
        }
    }
    
    return true;
};