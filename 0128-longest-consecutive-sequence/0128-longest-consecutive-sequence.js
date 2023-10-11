/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
    const numSet = new Set(nums); // O(n) space where n is length of nums
    
    let maxLength = 0;
    for(const num of numSet) { 

        // a starting number for a consecutive sequence has no left neighbor
        if (!numSet.has(num-1)) {
            let length = 0;
            let currNum = num;
            while (numSet.has(currNum)) {
                length += 1;
                currNum += 1;
            }
            maxLength = Math.max(maxLength, length);
        }        
    }
    
    return maxLength;
};