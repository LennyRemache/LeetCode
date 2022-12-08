/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    let sums = new Array(nums.length).fill(1);
    
    let left = new Array(nums.length).fill(1);
    let right = new Array(nums.length).fill(1);
    
    left[0] = nums[0]
    for(let i = 1; i < nums.length; i++) {
        left[i] = left[i-1] * nums[i];
    }
    
    right[nums.length-1] = nums[nums.length-1]
    for(let i = nums.length - 2; i > 0; i--) {
        right[i] = right[i+1] * nums[i];
    }
    
    
    for(let i = 1; i < sums.length-1; i++) {
        sums[i] = left[i-1] * right[i+1];
    }
    
    sums[0] = right[1];
    sums[sums.length-1] = left[sums.length-2]
    
    return sums;
};