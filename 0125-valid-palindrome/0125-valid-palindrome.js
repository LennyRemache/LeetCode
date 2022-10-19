/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = (s) => {
    s = s.toLowerCase();
    let newS = ""
    
    for (let i = 0; i < s.length; i++) {
        const isLetter = s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122;
        const isNum = s.charCodeAt(i) >= 48 && s.charCodeAt(i) <= 57;
        
        if (isLetter || isNum) newS += s[i];
    }
    
    return newS === newS.split('').reverse().join('');
};