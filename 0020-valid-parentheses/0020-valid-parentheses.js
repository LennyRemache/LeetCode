/**
 * @param {string} s
 * @return {boolean}
 */

// o(n) worse case runtime, O(n) worse case space
const isValid = (s) => {
    // storing valid matching brackets to prevent use of multiple if statements checking which type of bracket
    // is in the current iteration of the input string 
    // ex: if "{", else if "[", else if "("
    
    // O(1) space as it is fixed to these values
    const brackets = {
        "{" : "}",
        "[" : "]",
        "(" : ")"
    }
    
    // stack data structure to keep track of the order of how closing brackets should appear according to how open brackets appear
    const closingBracketStack = []; // o(n) worse case when s is all open brackets so we push the same amount of closing brackets
    
    // loop to iterate over each bracket in string input
    // O(n) runtime where n is length of s
    for(let bracket of s) {
        // if an open bracket then we track in what order the closing bracket should appear by pushing into stack
        if (brackets[bracket] !== undefined) {
            closingBracketStack.push(brackets[bracket]); // O(1) runtime for pushing and hashmap accessing
        } 
        // if a closing bracket then check if it appears in the right order. Last item in stack represents 
        // the closing bracket that corresponds with the last seen open bracket
        else if (bracket !== closingBracketStack.pop()) { // O(1) for popping from stack
            return false; // false if not a valid bracket match
        }
    }
    
    // there is a case where even number of brackets are provided so there is a possibility that not all closing brackets are matched
    // which means the stack would still be length > 0 which means not valid parentheses
    return closingBracketStack.length === 0 ? true : false;
};