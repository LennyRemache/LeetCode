/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = (nums, target) => {
    let start = 0;
    let end = nums.length - 1;
    
    while (start <= end) {
        const mid = Math.floor((start+end)/2);
        if (nums[mid] === target) return mid;
        
        else if (nums[start] <= nums[mid]) {
            if (nums[start] <= target && target < nums[mid]) {
                end = mid-1;
            } else {
                start = mid + 1;
            }
        } else {
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