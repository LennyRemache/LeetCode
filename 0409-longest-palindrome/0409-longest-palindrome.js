/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = (s) => {
    if (s.length === 1) return 1;
    
    const letterFreq = {};
    
    for(let letter of s) {
        if(letterFreq[letter] === undefined) letterFreq[letter] = 1;
        else letterFreq[letter] += 1;
    } 
    
    let length = 0;
    let oddFreq = false;
    
    for(let letter in letterFreq) {
        if(letterFreq[letter] % 2 === 0) length += letterFreq[letter];
        else {
            length += letterFreq[letter] - 1;
            oddFreq = true;
        }
    }
    
    return oddFreq === true ? length + 1 : length;
};