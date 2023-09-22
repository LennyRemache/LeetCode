/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    s = s.toLowerCase();
    
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        const isLeftAlpha = 97 <= s.charCodeAt(left) && s.charCodeAt(left) <= 122;
        const isLeftNum = 48 <= s.charCodeAt(left) && s.charCodeAt(left) <= 57;
        
        const isRightAlpha = 97 <= s.charCodeAt(right) && s.charCodeAt(right) <= 122;
        const isRightNum = 48 <= s.charCodeAt(right) && s.charCodeAt(right) <= 57;
        
        if (!isLeftAlpha && !isLeftNum) {
            left += 1;
        }
        else if (!isRightAlpha && !isRightNum) {
            right -= 1;
        }
        else if (s[left] !== s[right]) {
            return false;
        }
        else {
            left += 1;
            right -= 1;
        }
    }
    
    return true;
};