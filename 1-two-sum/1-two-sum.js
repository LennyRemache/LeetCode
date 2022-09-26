/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    let pairValues = {};
    for (let i = 0; i < nums.length;  i++) {
        if (pairValues[nums[i]] !== undefined) {
            return [i, pairValues[nums[i]]]
        } else {
            const pairVal = target - nums[i];
            pairValues[pairVal] = i;
        }
    }
    return false;
};