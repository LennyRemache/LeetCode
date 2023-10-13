/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
    const op = {
        "+": (n1, n2) => n1 + n2,
        "-": (n1, n2) => n1 - n2,
        "*": (n1, n2) => n1 * n2,
        "/": (n1, n2) => Math.trunc(n1 / n2)
    };
    const numStack = [];
    
    for (const token of tokens) {
        if (op[token] !== undefined) {
            const num2 = numStack.pop();
            const num1 = numStack.pop();
            const newNum = op[token](num1, num2);
            numStack.push(newNum);
           
        } else {
            numStack.push(parseInt(token));
        }
    }
    
    return numStack.pop();
};