/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const numFreq = {};
    
    for (let num of nums) {
        if (numFreq[num] === undefined) numFreq[num] = 1;
        else return true;
    }
    
    return false;
};