/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    
    let combination = [];
    let res = [];
    
    // using a state tree
    const backtrack = (open, close) => {
        // Base Case
        // when theres already n open and n close parenthesis then we have a valid combination
        if (open === n && close === n) {
            res.push(combination.join(""));
            return;
        } 
        
        // this is where the backtracking actually happens
        // first add an open parenthesis if possible
        // then add close parenthesis if possible
        
        // add open parenthesis
        if (open < n) {
            combination.push("(");
            backtrack(open + 1, close);
            combination.pop(); // pop to allow the case where we instead add a close parenthesis
            
        }
        // add close parenthesis
        if (close < open) {
            combination.push(")");
            backtrack(open, close + 1);
            combination.pop(); // pop to allow the case where we instead add an open parenthesis
        }
    }
    backtrack(0,0);
    return res;
};