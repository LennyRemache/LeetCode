/**
 * @param {string} s
 * @return {boolean}
 */

// O(n) runtime since loop depends on length of s
// O(n) space since stack depends on size of s 

const isValid = (s) => {
    // used to help track bracket valid pairs
    const brackets = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    
    // O(n) space worse case when all brackets are open brackets
    const openStack = []; // track the order of each open bracket that appears. Once a close bracket appears we check if it matches with the most recent open bracket to appear
    
    // O(n) runtime since we iterate through each bracket in s
    // loop through each bracket in s
    for(let bracket of s) {
        // if an open bracket we store the order of the open bracket by pushing it into the stack
        if (brackets[bracket] !== undefined) {
            openStack.push(bracket);
        } else { // is a close bracket
            // if the current close bracket does not match with the valid pair of the latest open bracket, return false
            if (bracket !== brackets[openStack.pop()]) {
                return false;
            }
        }
    }
    // loop exits once every close bracket finds its valid open bracket
    
    // however theres a case where we have leftover open brackets from the start of s that did not find a close bracket
    return openStack.length === 0 ? true : false;
};