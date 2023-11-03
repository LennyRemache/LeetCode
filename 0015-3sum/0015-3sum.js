/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a,b) => a-b);
    
    let res = [];
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) continue; // prevent repeat triplets for the same number
        const subTarget = nums[i] * (-1);
        let left = i+1;
        let right = nums.length - 1;
        while(left < right) {
            const sum = nums[left] + nums[right];
            if (sum === subTarget) {
                res.push([nums[i], nums[left], nums[right]]);
                left += 1;
                right -= 1;
                while (left < right && nums[left] === nums[left-1]) {
                    left += 1;
                }
                while (left < right && nums[right] === nums[right+1]) {
                    right -= 1;
                }
            } else if (sum < subTarget) {
                left += 1;
            } else {
                right -= 1;
            }
        }
    }
    return res;
};