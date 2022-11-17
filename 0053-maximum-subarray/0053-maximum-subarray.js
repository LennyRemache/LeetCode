/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = (nums) => {
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(nums[i], nums[i-1] + nums[i]);
        maxSum = Math.max(maxSum, nums[i]);
    }
    
    return maxSum;
};