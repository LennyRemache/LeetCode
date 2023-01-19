/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const brackets = {
        '{': '}',
        '[': ']',
        '(': ')'
    }
    
    let open = [];
    
    for(let bracket of s) {
        if (brackets[bracket] !== undefined) {
            open.push(bracket)
        } else {
            if (brackets[open.pop()] !== bracket) {
                return false;
            }
        }
    }
    
    return open.length > 0 ? false : true;
};