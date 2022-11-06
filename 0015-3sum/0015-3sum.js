/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    let [solution, left, right] = [[], 0, nums.length-1];

    nums.sort((a,b) => a-b);
    
    for (let i = 0; i < nums.length; i++) {
        if(nums[i] === nums[i-1]) continue;
        
        let target = nums[i] * -1;
        left = i + 1; 
        right = nums.length - 1;
        
        while (left < right) {
            if (nums[left] + nums[right] === target) {
                solution.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;     
                while (left < right && nums[left] === nums[left-1]) {
                    left++;
                }
                while (left < right && nums[right] === nums[right+1]) {
                       right--;
                }
            } else if (nums[left] + nums[right] > target) {
                right--;
            } else if (nums[left] + nums[right] < target) {
                left++;
            }
            
        }
        
    }     
    
    return solution;
};