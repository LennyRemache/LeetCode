/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(arr) {
    let numFreq = {};
    let degree = 0;
    
    let first = {};
    let last = {};
    
    for (let i = 0; i < arr.length; i++) {
        const num = arr[i];
        if (numFreq[num] === undefined) numFreq[num] = 1;
        else numFreq[num] += 1;
        if (first[num] === undefined) first[num] = i;
        if (last[num] === undefined) last[num] = i;
        else last[num] = Math.max(last[num], i)
        degree = Math.max(degree, numFreq[num]);
    }
    
    let minLength = Infinity;
    for(let num in numFreq) {
        if (numFreq[num] === degree) minLength = Math.min(minLength, last[num] - first[num] + 1);
    }
    
    return minLength;
};