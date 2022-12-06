/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    // T: O(nlog(n) + n^2) -> O(n^2)
    // S: O(1)
    
    nums.sort((a,b) => a-b); // O(nlog(n))
    
    let triplets = [];
    
    for (let i = 0; i < nums.length; i++) { // O(n^2)
        // prevents duplicates for when we find the same nums[i] again.
        // works because nums is sorted, so anything to the left of currNum will be either be <=.
        // if currNum = prevNum, we do not have to find currNum's triplets again.
        if(nums[i] === nums[i-1]) continue;
        
        let left = i+1;              // j
        let right = nums.length - 1; // k
        
        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                triplets.push([nums[i], nums[left], nums[right]]);
                // increment left and decrement right in order to prevent duplicates
                left++;
                right--;
                
                // works because nums is sorted, so anything to the left of nums[left] will be either be <=.
                // if nums[left] = nums[left-1], we do not have to find nums[left]'s triplets again.
                while(left < right && nums[left] === nums[left-1]) left++;
                
                // works because nums is sorted, so anything to the right of nums[right] will be either be >=.
                // if nums[right] = nums[right+1], we do not have to find nums[right]'s triplets again.
                while(left < right && nums[right] === nums[right+1]) right--;
                
            } else if (sum < 0) {
                // bc nums is sorted, increasing left pointer increases the sum by getting a larger number 
                // on the left side so we get closer to 0
                left++;
            } else if (sum > 0) {
                // bc nums is sorted, decreasing right pointer decreases the sum by getting a smaller number 
                // on the right side so we get closer to 0
                right--;
            }
            
        }
        //.      i      L  R
        // [-4, -1, -1, 0, 1, 2]
        //                     -1 + 0 + 1 = 1
        // triplets = [[-1,-1,2], [-1,0,1]]
        
    }
    return triplets;
};