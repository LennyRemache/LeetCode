/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let complements = {};
    
    for(let i = 0; i < nums.length; i++) {
        let num = nums[i];
        if (complements[num] !== undefined) {
            return [i, complements[num]];
        } else {
            complements[target-num] = i;
        }
    }
};