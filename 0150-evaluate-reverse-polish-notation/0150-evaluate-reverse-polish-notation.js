/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
    // T: O(n) loop through tokens once
    // S: O(n) relative to the input  
    
    const validOps = {
        "+": (num1, num2) => num1 + num2,
        "-": (num1, num2) => num1 - num2,
        "*": (num1, num2) => num1 * num2,
        "/": (num1, num2) => Math.trunc(num1 / num2)
    }
    
    let numStack = [];
    
    for(let token of tokens) {
        // if token is a number, push it into the numStack
        if (validOps[token] === undefined) {
            numStack.push(parseInt(token));
        } else { // else token is an arithmetic operator
            const num2 = numStack.pop();
            const num1 = numStack.pop();
            numStack.push(validOps[token](num1, num2));
        }
    }
    
    return numStack[0];
};