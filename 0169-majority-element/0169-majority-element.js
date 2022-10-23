/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    const numFreq = {};
    
    for (let num of nums) {
        if (numFreq[num] === undefined) numFreq[num] = 1;
        else numFreq[num] += 1;
    }
    
    for (let num in numFreq) {
        if (numFreq[num] > nums.length / 2) return num;
    }
};