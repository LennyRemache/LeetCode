/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// O(m*(26+n+26) + m) -> O(m*n) runtime where m is size of strs and n is average length of each string in strs
// O(m*n) space worse since there may not be any anagrams meaning res will have m properties and each value would be of size n

const groupAnagrams = (strs) => {
    const res = {}; // store anagrams based on stringified letterFreq arr as the key and the value is the anagram array of strs
                    // that have the same specific letterFreq key
    
    // loop through each str in strs to get its letterFreq array which will be the key in the hashmap
    // O(m) where m is the length of strs array
    for(const str of strs) {
        const letterFreq = new Array(26).fill(0); // O(26) runtime, O(1) space
        
        // loop to get letter frequencies of current str
        // O(n) where n is the average length of the current str
        for(const letter of str) {
            const index = letter.charCodeAt(0) - 97; //O(26)
            letterFreq[index] += 1;
        }
        
        // hashmap search is O(1) and toString() is O(26) since array is length 26
        // convert letterFreq to a string and use it as the key
        
        // if the key does not exist then no other str has had the same letterFreq
        if(res[letterFreq.toString()] === undefined) {
            res[letterFreq.toString()] = [str]; // so we define that start of this anagrams array for that key
        } 
        // else there exists a previous str that has the same letterFreq as curr str meaning they are anagrams
        else {
            res[letterFreq.toString()].push(str); // so we push curr str into the anagram arr at that key
        }
    }
    
    return Object.values(res);
};