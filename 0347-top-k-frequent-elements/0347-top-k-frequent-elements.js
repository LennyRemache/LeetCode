/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = (nums, k) => {
    const numFreq = {};
    const count = new Array(nums.length + 1);
    
    for(let num of nums) {
        if (numFreq[num] === undefined) {
            numFreq[num] = 0;
        }
        numFreq[num] += 1;
    }

    for (let num in numFreq) {
        const index = numFreq[num];
        if (!count[index]) {
            count[index] = [];
        } 
        count[index].push(num);
        
    }
    
    const res = [];
    for(let i = count.length - 1; i > 0; i--) {
        if (count[i]) {
            for(const num of count[i]) {
                res.push(num);
                if (res.length === k) {
                    return res;
                }
            }
        }
       
    }
};