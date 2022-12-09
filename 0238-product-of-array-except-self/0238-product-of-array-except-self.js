/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
    // T: O(n)
    // S: O(n)
    let sums = new Array(nums.length).fill(1);
    
    let left = new Array(nums.length).fill(1);
    let right = new Array(nums.length).fill(1);
    
    left[0] = nums[0] // handles first element not having anything to its left
    // which is why we also start at index 1 since index 0 is already handled
    for(let i = 1; i < nums.length; i++) {
        left[i] = left[i-1] * nums[i];
    }
    
    right[nums.length-1] = nums[nums.length-1] // handles last element not having anything to its right
    // which is why we also start at nums.length - 2 since index nums.length - 1 is already handled
    for(let i = nums.length - 2; i > 0; i--) {
        right[i] = right[i+1] * nums[i];
    }
    
    /* ex :
            nums = [1,2,3,4]
            
            left = [1,2,6,12] -> each index stores the product of all numbers up to that index in the leftside of nums
                                 - index 0 is set to just itself since nums[0] has no numbers to its left
                                 - index 2 is set to 6 because the product of numbers up to nums[2] is 6: 1*2*3
            
            right = [24,24,12,4] -> each index stores the product of all numbers up to that index in the rightside of nums
                                 - last index is set to just itself since nums[nums.length-1] has no numbers to its right
                                 - index 1 is set to 24 because the product of numbers up to nums[1] from the right is 24: 4*3*2
    
    */
    
    /* each position in sums represents the same position in nums
       except now we need to store the product of numbers to the left and product of numbers to the right
       of the current position.
    */
    for(let i = 1; i < sums.length-1; i++) {
        sums[i] = left[i-1] * right[i+1];
    }
    
    // manually store the product values for the first index and last index
    // first index product is simply the product of all numbers to its right
    // last index product is simply the product of all numbers to its left
    sums[0] = right[1];
    sums[sums.length-1] = left[sums.length-2]
    
    return sums;
};