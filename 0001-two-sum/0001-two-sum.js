/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// O(n) runtime where n is size of nums
// O(n) space worse case where pairs is same size as nums

const twoSum = (nums, target) => {
    const pairs = {};
    
    for(let i = 0; i < nums.length; i++) {
        const subTarget = target - nums[i]; // the number we are looking for to pair with curr nums[i]
        // if that other number is not found
        if (pairs[subTarget] === undefined) {
            // store current num as the key and its index as the value for future numbers to find it as its subTarget
            pairs[nums[i]] = i; 
        } else {
            return [pairs[subTarget], i]; // if that other number exists then a valid pair exists
        }
    }
};