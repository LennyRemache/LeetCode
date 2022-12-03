/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // T: O(n) S: O(n)
    let targets = {}; // used to store the pair value for each num in the nums arr that would sum to the 
                      // target, along with the curr nums index as the value
    
    // loop through each num in the nums array until we find the solution
    for (let i = 0; i < nums.length; i++) {
        let currNum = nums[i]; // 
        if (targets[currNum] === undefined) { // if the curr num is not a pair for a previously seen number that sums up to the target
                                              // then we can instead store the number that correlates with curr num to sum up to pair along with
                                              // curr nums index
                                              // so -> target - currNum = the correlated number we are looking for 
            targets[target - currNum] = i;
        } else { // else if the curr num is a pair for a previously seen number that sums up to the target
                                              // then we can return the stored index for currNum's pair in hashmap, and the currNums index
            return [targets[currNum], i];
        }
    }
};