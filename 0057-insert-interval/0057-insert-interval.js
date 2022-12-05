/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
    // T: O(n) since we loop through all of intervals once  
    // S: O(n + 1) -> O(n) worse case when we add all original intervals as is and also add the newInterval without merging any intervals together
    
    let res = [];
    
    let start = 0;
    let end = 1;
    
    let i = 0;
    // while there is no intersection between current interval and the new interval
    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        res.push(intervals[i]);
        i++;
    }
    
    // if prior loop ends before i reaches length of intervals array, that means we reached an intersection area or area where newInterval can be         // inserted. 
    // while current interval intersects with newInterval
    while(i < intervals.length && !(intervals[i][start] > newInterval[end])) {
        // modify newInterval to create a mergedInterval between curr interval and the newInterval
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]); // the start interval should always be the smallest number
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]); // the eb=nd interval should always be the largest number
        i++;
    }
    
    // push the mergedInterval if newInterval is modified
    // or push newInterval as is
    res.push(newInterval);
    
    // since the newInterval is already added into the new interval arr, then we can safely just push the rest of the intervals after newInterval
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }
    
    return res;
};