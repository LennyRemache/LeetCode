/**
 * @param {string} s
 * @return {boolean}
 */

// O(n) runtime where n is the length of s
// O(1) since we are not using additional data structure that depends on length of s
const isPalindrome = (s) => {
    s = s.toLowerCase(); // O(n) runtime where n is the length of n
    
    let left = 0; // left pointer
    let right = s.length - 1; // right pointer
    
    // while left index does not overlap right index
    // O(n/2) -> O(n) runtime since we loop through the letters of s
    while (left < right) {
        const isLeftAlpha = 97 <= s.charCodeAt(left) && s.charCodeAt(left) <= 122;
        const isLeftNum = 48 <= s.charCodeAt(left) && s.charCodeAt(left) <= 57;
        
        const isRightAlpha = 97 <= s.charCodeAt(right) && s.charCodeAt(right) <= 122;
        const isRightNum = 48 <= s.charCodeAt(right) && s.charCodeAt(right) <= 57;
        
        // if left index is not alphanumeric we increment pointer
        if (!isLeftAlpha && !isLeftNum) {
            left += 1;
        }
        // if right index is not alphanumeric we decrement pointer
        else if (!isRightAlpha && !isRightNum) {
            right -= 1;
        }
        // left and right are alphanumeric so now we check if both chars are not equal
        else if (s[left] !== s[right]) {
            return false;
        }
        // we found matching chars so we move pointers respectively
        else {
            left += 1;
            right -= 1;
        }
    }
    
    // loop exited meaning the string is a palindrome
    return true;
};