/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = (nums) => {
    nums.sort((a,b) => a-b); // sorting allows us to use two pointers to find triplets based a subtarget O(nlog(n))
    
    let res = []; // where we store our triplets
    
    // iterate through each number and find possible triplets for it without repeats
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) continue; // prevent repeat triplets for the same initial subtarget number
        
        const subTarget = nums[i] * (-1); // we can use the negative of the curr number as our subtarget since in order to get a sum of 0 with the
                                          // other 2 numbers to complete the triplet, they would have to sum to the negative of curr num
        
        let left = i+1; // the starting number is 1 + curr index since everything to the left of curr num would mathematically always result in a                         // number less than the subtarget when added with the curr right index number
        let right = nums.length - 1; // the ending number is the end of the numbers array
        
        // while left pointer does not overtake right pointer since if they did we would start to check the same combinations again
        while(left < right) {
            const sum = nums[left] + nums[right]; // used to cheeck against subtarget
            if (sum === subTarget) { // if sum of left and right is subtarget then we found a triplet that adds to 0
                res.push([nums[i], nums[left], nums[right]]); // push to res array the actual values and not indices
                left += 1; // increment left pointer and decrement right pointer to find other possible combinations for the triplets
                right -= 1;
                
                // this prevents the case where repeat left pointer values exist, so repeat triplets would occur
                while (left < right && nums[left] === nums[left-1]) {
                    left += 1;
                }
                // this prevents the case where repeat right pointer values exist, so repeat triplets would occur
                while (left < right && nums[right] === nums[right+1]) {
                    right -= 1;
                }
            } else if (sum < subTarget) { // if the sum of left and right is less than subtarget then we need a larger 
                                          // smallest number so increment left pointer
                left += 1;
            } else if (sum > subTarget) { // if the sum of left and right is greater than subtarget then we need a smaller 
                                          // largest number so decrement right pointer
                right -= 1;
            }
        }
    }
    return res;
};