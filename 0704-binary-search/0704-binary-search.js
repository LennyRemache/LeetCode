/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    // pointers to help find the mid point of the array
    let left = 0;
    let right = nums.length - 1;
    
    // loop to continously slice the array in half 
    // since array is sorted it is safe to cut array in halves until we reach the target
    while (left <= right) {
        let mid = Math.floor((left + right) / 2); // get the middle index
        if (nums[mid] === target) return mid; // middle index contains target value
        
        if (nums[mid] > target) { // if middle index contains larger value than target then we can ignore everything to the right of it since everything to the right of it would also be greater than the target when sorted
            right = mid - 1;
        }
        else if (nums[mid] < target) {
            // if middle index contains smaller value than target then we can ignore everything to the left of it since everything to the left of it would also be less than the target when sorted
            left = mid + 1;
        }
    }
    
    // if we reach this point then we never found the target
    return -1;
};