/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    s = s.toLowerCase();
    
    let left = 0;
    let right = s.length - 1;
    
    while (left < right) {
        let isLeftAlpha = s.charCodeAt(left) >= 97 && s.charCodeAt(left) <= 122;
        let isLeftNum = s.charCodeAt(left) >= 48 && s.charCodeAt(left) <= 57;
        
        let isRightAlpha = s.charCodeAt(right) >= 97 && s.charCodeAt(right) <= 122;
        let isRightNum = s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 57;
        
        if (!isLeftAlpha && !isLeftNum) {
            left++;
            continue;
        }
        if (!isRightAlpha && !isRightNum) {
            right--;
            continue;
        }
        
        if (s[left] !== s[right]) return false;
        
        left++;
        right--;
    }
    
    return true;
};