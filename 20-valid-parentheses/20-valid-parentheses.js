/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = (s) => {
    const parentheses = {
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    let open = [];
    
    for(let i = 0; i < s.length; i++) {
        if (parentheses[s[i]] !== undefined) { // if an open parenthesis
            open.push(s[i]);
        } else { // else is a closed parenthesis
            const lastOpen = open[open.length - 1]; // last open paren to compare to curr 
                                                    // closing paren
            if (parentheses[lastOpen] === s[i]) { // if lastOpen's closing paren in the
                                                  // object matches curr closing paren
                                                  // then its valid and we pop open
                open.pop();
            } else { // else means lastOpen's closing paren in the
                     // object does not match curr closing paren making it an invalid pair
                return false;
            }
        }
    }
    
    return open.length === 0; // takes care of s of length 0 and 1
};