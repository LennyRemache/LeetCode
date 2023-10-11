/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = (nums) => {
    const map = {}; // O(n) space where n is length of nums
    for(let num of nums) {
        map[num] = num;
    }
    
    let maxLength = 0;
    for(let num in map) { 
        let currNum = parseInt(num);
        // a starting number for a consecutive sequence has no left neighbor
        if (map[currNum - 1] === undefined) {
            let length = 0;
            while (map[currNum] !== undefined) {
                length += 1;
                currNum = parseInt(currNum) + 1;
            }
            maxLength = Math.max(maxLength, length);
        }
       
        
    }
    
    return maxLength;
};