/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const brackets = {
        "{" : "}",
        "(" : ")",
        "[" : "]"
    }
    
    const openStack = [];
    
    for(let bracket of s) {
        if (brackets[bracket] !== undefined) {
            openStack.push(bracket);
        } else {
            if (bracket !== brackets[openStack.pop()]) {
                return false;
            }
        }
    }
    
    return openStack.length === 0 ? true : false;
};