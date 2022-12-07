/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = (tokens) => {
    const validOps = {
        "+": true,
        "-": true,
        "*": true,
        "/": true
    }
    
    let numStack = [];
    
    for(let token of tokens) {
        //console.log(numStack)
        if (validOps[token] === undefined) {
            numStack.push(parseInt(token));
        } else {
            num2 = numStack.pop();
            num1 = numStack.pop();
            if (token === "+") {
                numStack.push(num1+num2);
            } else if(token === "-") {
                numStack.push(num1-num2);
            } else if(token === "*") {
                numStack.push(num1*num2);
            } else if(token === "/") {
                let res = num1/num2;
                if(res > 0) numStack.push(Math.floor(res));
                else numStack.push(Math.ceil(res))
            }
        }
    }
    
    //console.log(parseInt("-11"))
    
    return numStack[0];
};