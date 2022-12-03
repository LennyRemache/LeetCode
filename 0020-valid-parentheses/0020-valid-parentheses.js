/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    // used to validate bracket pairs
    const brackets = {
       "(" : ")",
       "{": "}",
       "[": "]"
    }

    let stack = []; // stores all open brackets in LIFO order
    
    // iterate over all brackets in the string
    for (let bracket of s) {
        // if curr bracket is an open bracket then we push the open bracket to the stack
        if (brackets[bracket]) {
            stack.push(bracket);
        } else if (brackets[stack.pop()] !== bracket) {
            // if the curr bracket is a closing bracket we check if the last open bracket to be pushed into the stack 
            // correctly pairs with the curr closing bracket based on the brackets validation hashmap
            // if not return false;
            return false;
        }
    }
    
    // if the loop fully iterates then we need to check all open brackets have a closing bracket to pair with
    // meaning if the stack has no open brackets left then they were correctly paired with their correlated closing bracket
    // if stack still has open brackets left then there were not enough closing brackets to pair it with
    return stack.length === 0;
};