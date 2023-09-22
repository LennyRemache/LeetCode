/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// O(n) runtime where n is the length of the nums array
// O(1) space since we do not create any new data structure
const search = (nums, target) => {
    // pointer to help create subarrays when needed
    let start = 0; 
    let end = nums.length - 1;
    
    // while our subarray indexes do not takeover each other
    while (start <= end) {
        // binary search checks for midpoint having the target on each iteration
        let mid = Math.floor((start + end) / 2);
        // if mid has the target then we return the midpoint index
        if (nums[mid] === target) return mid;
        // if target jnot found and mid has a val less than target then we have to increment start pointer
        else if (nums[mid] < target) start = mid + 1;
        // if target jnot found and mid has a val greater than target then we have to decrement end pointer
        else if (nums[mid] > target) end = mid - 1;
    }
    // loop ends completely if target was not found in nums
    return -1;
};