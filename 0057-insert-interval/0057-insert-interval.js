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
    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        res.push(intervals[i]);
        i++;
    }
    
    while(i < intervals.length && !(intervals[i][start] > newInterval[end])) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }
    
    res.push(newInterval);
    
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }
    
    return res;
};