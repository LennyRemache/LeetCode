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
        
        let left = i+1; // j
        let right = nums.length - 1; // k
        
        while (left < right) {
            if (nums[left] + nums[right] === subTarget) {
                triplets.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                while(left < right && nums[left] === nums[left-1]) left++;
                while(left < right && nums[right] === nums[right+1]) right--;
            } else if (nums[left] + nums[right] < subTarget) {
                left++;
            } else if (nums[left] + nums[right] > subTarget) {
                right--;
            }
            
        }
        //.      T   L        R
        // [-4, -1, -1, 0, 1, 2]
        // subTarget = 1     -1 + 2 = 1
        
    }
    return triplets;
};