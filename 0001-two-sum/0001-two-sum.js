/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    const pairs = {};
    
    for(let i = 0; i < nums.length; i++) {
        const subTarget = target - nums[i];
        if (pairs[subTarget] === undefined) {
            pairs[nums[i]] = i;
        } else {
            return [pairs[subTarget], i];
        }
    }
};