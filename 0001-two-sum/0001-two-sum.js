/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
    // used to store the index of a previously seen num that could potentially be a match with future num
    const pairs = {}; // worse case O(n) space where n is size of nums
    
    // O(n) worse case runtime where n is the size of nums array
    for(let i = 0; i < nums.length; i++) {
        let currNum = nums[i]; // O(1)
        // key is mathematically looking for if any num that matches with currNum to equal target was potentially seen already
        // match = target - currNum ------> target =  currNum + match
        const match = target - currNum;
        // if the match for currNum was not found then we store currNum as a potential match for another num in future iterations
        if (pairs[match] === undefined) {
            pairs[currNum] = i; // we store the index of the saved num since we are later returning indices of a
                                // valid pair of nums that add to target
        } 
        // if the match for currNum was seen before then we can return currNums index i and the stored index for match
        else {
            return [pairs[match], i]
        }
    }
};