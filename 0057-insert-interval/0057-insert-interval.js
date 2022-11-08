/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
  
    let res = [];

    let start = 0;
    let end = 1;

    let i = 0;
    
    // while there is no intersection between curr interval and the newInterval
    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        res.push(intervals[i]);
        i++;
    }
    
    // While there is an intersection between curr interval and the newInterval
    while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }
    
    // push the newly combined interval
    res.push(newInterval);
    
    // push any remaining leftover intervals that do not interset with the newInterval
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }

    return res;
};