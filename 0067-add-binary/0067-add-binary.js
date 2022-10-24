/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const addBinary = (a, b) => {
    a = a.split("");
    b = b.split("");
    
    let carryOver = 0;
    let maxLength = Math.max(a.length, b.length);
    let res = new Array(maxLength).fill(0);
    
    while (a.length !== maxLength) a.unshift(0);
    while (b.length !== maxLength) b.unshift(0);
    
    while(maxLength > 0) {
        let sum = parseInt(a[maxLength - 1]) + parseInt(b[maxLength - 1]) + carryOver;
        
        if (sum === 2) {
            sum = 0;
            carryOver = 1;
        } else if (sum === 3) {
            sum = 1;
            carryOver = 1;
        } else {
            carryOver = 0;
        }
        
        res[maxLength - 1] = sum.toString();
        
        maxLength -= 1;
    }
    
    if (carryOver > 0) {
        res.unshift("1");
    }
    return res.join("")
};