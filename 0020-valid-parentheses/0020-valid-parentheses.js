/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const brackets = {
       "(" : ")",
       "{": "}",
       "[": "]"
    }

    let stack = [];
    
    for (let bracket of s) {
        if (brackets[bracket] !== undefined) {
            stack.push(bracket);
        } else if (brackets[stack.pop()] !== bracket) {
            return false;
        }
    }
    
    return stack.length === 0;
};