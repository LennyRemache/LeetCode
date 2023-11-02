/**
 * @param {string} s
 * @return {boolean}
 */

// O(n) runtime since we iterate through each character once
// O(1) space since we do not use additional space. We simply use the same input string to iterate over

const isPalindrome = (s) => {
    s = s.toLowerCase() // description says to convert all uppercase chars to lowercase before checking if palindrome
    
    let left = 0; // start pointer to check left side
    let right = s.length - 1; // end pointer to check right side
    
    // while left pointer is less than right pointer because after left become right we would be checking the same chars again
    while (left < right) {
        const isLeftNum = 48 <= s.charCodeAt(left) && s.charCodeAt(left) <= 57;
        const isRightNum = 48 <= s.charCodeAt(right) && s.charCodeAt(right) <= 57;
        
        const isLeftAlpha = 97 <= s.charCodeAt(left) && s.charCodeAt(left) <= 122;
        const isRightAlpha = 97 <= s.charCodeAt(right) && s.charCodeAt(right) <= 122;
        
        // check if left is not a valid char
        if (!isLeftNum && !isLeftAlpha) {
            left += 1;
        } else if (!isRightNum && !isRightAlpha) { // check if right is also not a valid char
            right -= 1;
        } else if (s[left] === s[right]) { // otherwise left and right are valid chars so check if they are the same char
            left += 1;
            right -= 1;
        } else {
            return false; // if not same chars then it is not a valid palindrome
        }
    }
    
    return true; // is a valid palindrome if loop exits
};