/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const numFreq = {};
    
    for (let num of nums) {
        if (numFreq[num] === undefined) numFreq[num] = 1;
        else numFreq[num] += 1;
    }
    
    for (let num in numFreq) {
        if (numFreq[num] > 1) return true;
    }
    
    return false;
};