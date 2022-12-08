/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const backspaceCompare = (s, t) => {
    // T: O(n + m) where n is s.length and m is t.length
    // T: O(n + m)
    
    /*
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
    */
    
    // cleaner code
    const parse = (tokens) => {
        let stack = [];
        for(let token of tokens) {
            if (token !== "#") {
                stack.push(token);
            } else {
                stack.pop();
            }
        }
        
        return stack.join("");
    }
    
    s = parse(s); // O(n)
    t = parse(t); // O(m)
    
    return s === t;
};