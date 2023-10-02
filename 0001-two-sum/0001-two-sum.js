/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n) runtime where n is size of nums
// O(n) space worse case where pairs is same size as nums

const twoSum = (nums, target) => {
    const pair = {};
    
    for(let i = 0; i < nums.length; i++) {
        const complement = target - nums[i]; // the number we are looking for to pair with curr nums[i]
        // if complement is not found
        if (pair[complement] === undefined) {
            // store current num as the key and its index as the value for future numbers to find it as its complement
            pair[nums[i]] = i; 
        } else {
            return [pair[complement], i]; // if complement exists then a valid pair exists
        }
    }
};