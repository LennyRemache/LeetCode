/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    // T: O(n) where n represents the binary number with the max length
    // S: O(n) where m represents the length of the summed binary number string
    let res = [];
    let carryOver = 0;
    
    // loop the length of the max length binary number
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        // ternary operators to check if each string goes out of bounds -> out of bounds is falsy
        const digitA = a[a.length - i - 1] ? a[a.length - i - 1] : 0;
        const digitB = b[b.length - i - 1] ? b[b.length - i - 1] : 0;
        
        let sum = parseInt(digitA) + parseInt(digitB) + carryOver;
        if (sum === 2) { // means "1" + "1" + "0" which should sum to 0 in binary and have a carryover of 1
            sum = 0;
            carryOver = 1;
        } else if (sum === 3) { // means "1" + "1" + "1" which should sum to 1 in binary and have a carryover of 1
            sum = 1;
            carryOver = 1;
        } else { // else means we have "0" + "1" + "0" or "1" + "0" + "0" which sums to 1 in binary and has carryover of 0
            carryOver = 0;
        }
        
        res.push(`${sum}`);
    }
    
    if (carryOver === 1) res.push('1');
    
    return res.reverse().join("");
};