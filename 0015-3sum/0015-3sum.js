/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a,b) => a-b);
    
    let res = [];
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) continue; // prevent repeat triplets for the same number
        
        let left = i+1;
        let right = nums.length - 1;
        
        while(left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                res.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (left < right && nums[left] === nums[left-1]) {
                    left += 1;
                }
                while (left < right && nums[right] === nums[right+1]) {
                    right -= 1;
                }
            } else if (sum < 0) {
                left += 1;
            } else if (sum > 0) {
                right -= 1;
            }
        }
    }
    return res;
};