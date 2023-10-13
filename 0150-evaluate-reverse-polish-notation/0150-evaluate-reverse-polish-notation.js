/**
 * @param {string[]} tokens
 * @return {number}
 */

// O(n) runtime since we iterate through the tokens
// O(n) space since we use the stack which stores number tokens 

const evalRPN = (tokens) => {
    // the mathematical function that each operator corresponds too
    const op = {
        "+": (n1, n2) => n1 + n2,
        "-": (n1, n2) => n1 - n2,
        "*": (n1, n2) => n1 * n2,
        "/": (n1, n2) => Math.trunc(n1 / n2)
    };
    const numStack = []; // used to keep track of integers and sub results in order 
    
    for (const token of tokens) {
        // if an operation token
        if (op[token] !== undefined) {
            const num2 = numStack.pop(); // popping num2 first prevents edge case with subtraction and division
            const num1 = numStack.pop(); // popping num1 second matters for subtraction and division. Otherwise order of popping doesnt matter
            const newNum = op[token](num1, num2); // doing the mathematical operation based on token operation
            numStack.push(newNum); // push the sub result for future operation tokens
           
        } else { // is a number token
            numStack.push(parseInt(token));
        }
    }
    
    return numStack.pop(); // last element left is the final result
};