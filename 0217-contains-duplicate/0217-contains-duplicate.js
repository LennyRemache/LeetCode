/**
 * @param {number[]} nums
 * @return {boolean}
 */

// O(n) runtime where n is the size of nums
// O(n) space worse case where all num of nums are unique and hashmap equals size of nums

const containsDuplicate = (nums) => {
    const freq = {}; // track the frequency of each integer
    
    for(let num of nums) {
        if (freq[num] === undefined) {
            freq[num] = 1; // first time an integer appears we define its value in the hash map
        } else {
            return true; // if already defined in hashmap then it contains duplicate meaning 2 or more
        }
    }
    return false; // no duplicate found if loop ends
};