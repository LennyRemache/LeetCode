/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const brackets = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    
    let openBrackets = []
    
    for (let bracket of s) {
        if (brackets[bracket] === undefined) openBrackets.push(bracket);
        else if (openBrackets.pop() !== brackets[bracket]) return false;
    }
    
    return openBrackets.length === 0;
};