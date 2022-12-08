/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const romanVals = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    
    const specialCase = {
        "V": ["I", 4], // 4
        "X": ["I", 9], // 9
        
        "L": ["X", 40], // 40
        "C": ["X", 90], // 90
        
        "D": ["C", 400], // 400
        "M": ["C", 900]  // 900
    }
    
    let integer = 0;
    for(let i = 0; i < s.length; i++) {
        let currRoman = s[i];
        let prevRoman = s[i-1];
        if(currRoman !== "I" && specialCase[currRoman][0] === prevRoman) {
            integer += specialCase[currRoman][1] - romanVals[prevRoman];
        } else {
            integer += romanVals[currRoman];
        }
    }
    
    return integer;
};