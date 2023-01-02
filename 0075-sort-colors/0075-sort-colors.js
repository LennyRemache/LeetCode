/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    // T: O(n) where n is length of nums
    // S: O(1) since numCount will only have 0,1,2 as possible keys
    
    let i = 0;
    let left = 0;
    let right = nums.length - 1;
    
    // one pass solution
    while (i <= right) {
        if (nums[i] === 0) {
            nums[i] = nums[left];
            nums[left] = 0;
            left++;
        } else if (nums[i] === 2) {
            nums[i] = nums[right];
            nums[right] = 2;
            right--;
            continue;
        }
        i++;
    }
    
    return nums;
};