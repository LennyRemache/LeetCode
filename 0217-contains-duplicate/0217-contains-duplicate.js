/**
 * @param {number[]} nums
 * @return {boolean}
 */
// O(n) runtime where n is the size of nums
// O(n) space worse case where all num of nums are unique and hashmap equals size of nums
const containsDuplicate = (nums) => {
    const freq = {}; // track the frequency of each distinct integer
    
    for(let num of nums) {
        if (freq[num] === undefined) {
            freq[num] = 0; // first time an integer appears we define its value in the hash map
        }
        freq[num] += 1; // add 1 to the frequency of curr num
        
        if (freq[num] >= 2) return true; // if frequency of curr num is 2 or more then it contains duplicate
    }
    
    return false; // no duplicate found if loop ends
};