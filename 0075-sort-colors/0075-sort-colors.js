/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    // T: O(n) where n is length of nums
    // S: O(1) since numCount will only have 0,1,2 as possible keys
    
    // similar to bucket sorting
    let numCount = {
        0: 0, 
        1: 0,
        2: 0
    };
    
    for(let num of nums) { // O(n)
        numCount[num] += 1;
    }
    
    let i = 0;
    let color = 0;
    while (i < nums.length) { // O(n)
        if (numCount[color] === 0) {
            color += 1;
            continue;
        }
        nums[i] = color;
        numCount[color] -= 1;

        i++
    }
    
    return nums;
};