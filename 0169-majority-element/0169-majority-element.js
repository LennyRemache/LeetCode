/**
 * @param {number[]} nums
 * @return {number}
 */
const majorityElement = (nums) => {
    // T: O(n) S: O(n)
    let freq = {};
    
    for (let num of nums) {
        if (freq[num] === undefined) freq[num] = 1;
        else freq[num] += 1;
        
        if (freq[num] > nums.length / 2) return num;
    }
};