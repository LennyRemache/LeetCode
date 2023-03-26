/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    let count = {};
    
    for (let num of nums) {
        if (count[num] === undefined) count[num] = 0;
        count[num] += 1;
        if (count[num] >= nums.length / 2) return num;
    }
};