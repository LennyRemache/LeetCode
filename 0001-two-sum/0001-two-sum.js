/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const pair = {};
    
    for (let i = 0; i < nums.length; i++) {
        if (pair[nums[i]] === undefined) pair[target-nums[i]] = i;
        else return [pair[nums[i]], i];
    }
};