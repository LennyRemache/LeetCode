/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// T: O(n) worse case since at most we loop the entire nums array once
// S: O(n) worse case since at most we loop through the entire nums array and store each complement in the dictionary

const twoSum = (nums, target) => {
    let subTarget = {}; // dictionary has constant O(1) lookup time
                        // dictionary will hold all the complements of the current number at index i
                        // complements are the subtargets that the currnum at i needs to find in the rest of the                         // nums array in order to sum to the target
    
    // loop through the entire nums array once
    for (let i = 0; i < nums.length; i++) {
        // is curr num at index i a complement of a previous number seen in the nums array?
        if (subTarget[nums[i]] !== undefined) {
            return [subTarget[nums[i]], i];
        } else {
            // the subtarget that curr num needs to find
            let complement = target - nums[i];
            // store the subtarget and the index of currnum that needs to find the new subtarget created
            subTarget[complement] = i;
        }
    }
};