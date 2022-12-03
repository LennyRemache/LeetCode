/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // T: O(n) S: O(n)
    let targets = {};
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i];
        if (targets[currNum] === undefined) {
            targets[target - currNum] = i;
        } else {
            return [targets[currNum], i];
        }
    }
};