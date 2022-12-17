/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    // T: O(log(n))
    // S: O(1)
    
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const mid = Math.floor((start+end)/2);
        if (nums[mid] === target) return mid;
        
        // is left array sorted from start to mid
        else if (nums[start] <= nums[mid]) {
            // is target in range of left sorted array from start to mid
            if (nums[start] <= target && target < nums[mid]) {
                end = mid-1;
            } else {
                start = mid + 1;
            }
        } 
        // else right array sorted from mid to end
        else {
            // is target in range of right sorted array from mid to end
            if (nums[end] >= target && target > nums[mid]) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

    }
    
   return -1
    // target = 0
    //  s     m     e
    // [4,5,6,7,0,1,2]
};