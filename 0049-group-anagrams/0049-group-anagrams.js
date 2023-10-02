/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = (strs) => {
    const res = {};
    
    for(const str of strs) {
        const letterFreq = new Array(26).fill(0);
        for(const letter of str) {
            const index = letter.charCodeAt(0) - 97;
            letterFreq[index] += 1;
        }
        
        if(res[letterFreq.toString()] === undefined) {
            res[letterFreq.toString()] = [str];
        } else {
            res[letterFreq.toString()].push(str);
        }
    }
    
    return Object.values(res);
};