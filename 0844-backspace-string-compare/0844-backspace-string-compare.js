/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    let sStack = [];
    let tStack = [];
    
    for(let token of s) {
        if (token !== "#") {
            sStack.push(token);
        } else {
            sStack.pop();
        }
    }
    
    for(let token of t) {
        if (token !== "#") {
            tStack.push(token);
        } else {
            tStack.pop();
        }
    }
    
    return sStack.join("") === tStack.join("");
};