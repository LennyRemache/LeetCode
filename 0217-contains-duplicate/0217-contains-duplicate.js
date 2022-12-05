/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    nums.sort((a,b) => a-b); // time is O(nlog(n)) however now space is O(1)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i-1]) return true;
    }
    
    return false;
    
    /*
    const numFreq = {}; // T: O(n) and S: O(n)
    
    for (let num of nums) {
        if (numFreq[num] === undefined) numFreq[num] = 1;
        else return true;
    }
    
    return false;
    */
};