/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    
    let numCount = {};
    
    for(let num of nums) {
        if (numCount[num] === undefined) numCount[num] = 0;
        numCount[num] += 1;
        
        if (numCount[num] >= 2) return true;
    }
    
    return false
};