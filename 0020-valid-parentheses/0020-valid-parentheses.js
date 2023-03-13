/**
 * @param {string} s
 * @return {boolean}
 */

// T: O(n) since worse case we loop through the entire string
// S: O(n) since worse case we loop through the entire string of only open brackets and we push all to the stack


const isValid = (s) => {
    // dictionary used to store a way to validate which open brackets go with which closing brackets
    // O(1) since this dictionary never changes in size
    let brackets = {
        "(": ")",
        "{": "}",
        "[": "]"
    };
    
    // O(n) worse case string is filled with open brackets only
    let stack = []; // stack used to store the order in which each opening bracket appears

    for (let i = 0; i < s.length; i++) {
        let currBracket = s[i];
        
        // is currBracket an open bracket?
        if (brackets[currBracket] !== undefined) {
            stack.push(currBracket);
        } else { // is a closing bracket
            // pop the last opening bracket to have appeared in order to validate that it goes with the current
            // closing bracket
            if (brackets[stack.pop()] !== currBracket) return false;
        }
    }
    
    // loops ends meaning we validated all closing brackets had a valid open bracket in the string however we also need to check all open brackets found a closing bracket pair
    return stack.length === 0;
};