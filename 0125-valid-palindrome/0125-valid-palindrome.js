/**
 * @param {string} s
 * @return {boolean}
 */

// T: O(n) since worse case we loop through the entire input string
// S: O(1) since we do not use any additional data structure that depends on the size of the input string

var isPalindrome = function(s) {
    s = s.toLowerCase(); // chanege entire string to lowercase letters
    
    let left = 0; // the left pointer
    let right = s.length - 1; // the right pointer
    
    // loop only while left pointer does not overlap right pointer
    while (left < right) {
        // conditions to check if the character at left and right pointer are letters or numbers
        let isLeftAlpha = s.charCodeAt(left) >= 97 && s.charCodeAt(left) <= 122;
        let isLeftNum = s.charCodeAt(left) >= 48 && s.charCodeAt(left) <= 57;
        
        let isRightAlpha = s.charCodeAt(right) >= 97 && s.charCodeAt(right) <= 122;
        let isRightNum = s.charCodeAt(right) >= 48 && s.charCodeAt(right) <= 57;
        
        // if left is not a letter or number then we can move to next char
        if (!isLeftAlpha && !isLeftNum) {
            left++;
            continue;
        }
        // if right is not a letter or number then we can move to next char
        if (!isRightAlpha && !isRightNum) {
            right--;
            continue;
        }
        
        // reach here when both left and right are letters or numbers so we check if they are identical
        if (s[left] !== s[right]) return false;
        
        // reach here if the letters or numbers are identical on the left and right
        // now we safely increment/decrement our pointers
        left++;
        right--;
    }
    
    // loop only ends when the string is a valid palindrome
    return true;
};