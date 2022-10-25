/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    nums.sort((a,b) => a-b); // time is O(nlog(n)) however now space is O(1)
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) return true;
    }
    
    return false;
};