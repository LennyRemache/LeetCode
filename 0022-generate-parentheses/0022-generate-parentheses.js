/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    let open = 0;
    let close = 0;
    
    let combination = [];
    let res = [];
    const backtrack = (open, close) => {
        if (open === n && close === n) {
            res.push(combination.join(""));
            return;
        } 
        
        // add open parenthesis
        if (open < n) {
            combination.push("(");
            backtrack(open + 1, close);
            combination.pop();
            
        }
        // add close parenthesis
        if (close < open) {
            combination.push(")");
            backtrack(open, close + 1);
            combination.pop();
        }
    }
    backtrack(0,0);
    return res;
};