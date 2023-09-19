/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const brackets = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    
    const closingBracketStack = [];
    
    for(let bracket of s) {
        if (brackets[bracket] !== undefined) {
            closingBracketStack.push(brackets[bracket]);
        } else if (bracket !== closingBracketStack.pop()) {
            return false;
        }
    }
    return closingBracketStack.length === 0 ? true : false;
};