/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a,b) => a-b);
    
    let triplets = [];
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) continue;
        
        let subTarget = nums[i] * -1;
        let left = i + 1;
        let right = nums.length - 1;
        
        while (left < right) {
            if (nums[left] + nums[right] === subTarget) {
                triplets.push([nums[i],nums[left], nums[right]]);
                left++;
                right--;
                while (left < right && nums[left-1] === nums[left]) left++;
                while (left < right && nums[right+1] === nums[right]) right--;
            } else if (nums[left] + nums[right] < subTarget) {
                left++;
            } else if (nums[left] + nums[right] > subTarget) {
                right--;
            }
        }
    }
        
    
    return triplets;
};