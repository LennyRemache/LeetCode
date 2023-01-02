/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = (nums) => {
    
    let numCount = {
        0: 0, 
        1: 0,
        2: 0
    };
    
    for(let num of nums) {
        numCount[num] += 1;
    }
    
    let i = 0;
    let color = 0;
    while (i < nums.length) {
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