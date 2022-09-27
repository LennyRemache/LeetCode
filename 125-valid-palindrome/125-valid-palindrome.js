/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    let newString = "";
    
    for (let i = 0; i < s.length; i++) {
        const asciiVal = s.charCodeAt(i)
        if ((48 <= asciiVal && asciiVal <= 57) || (97 <= asciiVal && asciiVal <= 122)) { // if char is a number ascii value 
            newString += s[i];                                                           // char or lowercase letter
        } else if (65 <= asciiVal && asciiVal <= 90) { // if uppercase letter
            newString += String.fromCharCode(asciiVal + 32)
        } // if not alphanumeric char is skipped and not added to newString
    }
    
    for (let j = 0; j < Math.floor(newString.length / 2); j++) {
        if (newString[j] !== newString[newString.length - j - 1]) {
            return false;
        }
    }
    
    return true;
};