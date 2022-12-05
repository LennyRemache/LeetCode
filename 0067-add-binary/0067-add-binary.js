/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    let res = '';
    let carryOver = 0;
    
    for (let i = 0; i < Math.max(a.length, b.length); i++) {
        const digitA = a[a.length - i - 1] ? a[a.length - i - 1] : 0;
        const digitB = b[b.length - i - 1] ? b[b.length - i - 1] : 0;
        
        let sum = parseInt(digitA) + parseInt(digitB) + carryOver;
        if (sum === 2) {
            sum = 0;
            carryOver = 1;
        } else if (sum === 3) {
            sum = 1;
            carryOver = 1;
        } else {
            carryOver = 0;
        }
        
        res += sum.toString();
    }
    
    if (carryOver === 1) res += "1";
    
    return res.split("").reverse().join("");
};