/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// O(n+n+n+n+n) -> O(5n) -> O(n) runtime
// O(n+n+k) -> O(n+k) space

const topKFrequent = (nums, k) => {
    const numFreq = {}; // O(n) space since worse case each num in nums is unique
    
    // index represents frequency
    // At most a number can appear nums.length times
    // O(n) runtime
    const count = new Array(nums.length + 1); // O(n+1) -> O(n) space since it relies on size of nums
    
    // O(n) runtime
    // fixing issue where .fill([]) creates a single reference to the same []
    for(let i = 0; i < count.length; i++) {
        count[i] = [];
    }
    
    // O(n) runtime since we iterate through each num of nums
    // get the frequencies of each unique number
    for(let num of nums) {
        // not seen before then define it
        if (numFreq[num] === undefined) {
            numFreq[num] = 0;
        }
        // if defined or once defined just simply add 1 more to curr number's frequency
        numFreq[num] += 1;
    }
    
    // O(n) worse case since when all nums are unique numFreq size is n
    // here is where the pattern/trick is recognized: using frequency as the index sorts based on top k elements
    // each num's frequency val is the index at which the num is stored at
    // multiple nums can have the same frequency so its an array to store multiple nums as same index
    for (let num in numFreq) {
        const index = numFreq[num]; // index is the frequency of the integer
        count[index].push(num); // any number with the same frequencies will be stored in the arr at that frequency index
    }
    
    const res = []; // O(k) space
    // O(n+n) -> O(n) runtime since count depends on nums.length and inner loop doesnt do n operations per iteration but instead does
    // a total of n operations for all iterations combined
    // loop backwards since count array is sorted from least to most frequent element 
    for(let i = count.length - 1; i > 0; i--) {
        for(const num of count[i]) {
            res.push(num);
            // we keep on pushing until k most frquent elements are appended
            if (res.length === k) {
                return res;
            }
        }
    }
};