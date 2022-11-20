/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
const insert = (intervals, newInterval) => {
    let res = []; // the returned intervals with no overlaps with the newInterval
    
    let start = 0;
    let end = 1;
    
    let i = 0;
    
    // while there is no intersection between current interval and the new interval
    // and while we have not reached a point where newIterval values can be inserted correctly
    while (i < intervals.length && !(intervals[i][end] >= newInterval[start])) {
        res.push(intervals[i]);
        i++;
    }
    
    // if prior loop ends before i reaches length of intervals array, that means we reached an intersection area
    // in other words the end value of the current interval is >= the start value of the newInterval.
    // so this loop will check that as long as we do not reach an interval that has a start value greater than the end of the newInterval
    // in other words an interval that is greater and does not intersect with newInterval
    // this will modify the newInterval values with the merged start and end values
    while (i < intervals.length && !(intervals[i][start] > newInterval[end])) {
        newInterval[start] = Math.min(intervals[i][start], newInterval[start]);
        newInterval[end] = Math.max(intervals[i][end], newInterval[end]);
        i++;
    }
    
    res.push(newInterval); // before pushing the rest of the non intersecting intervals
                           // push the merged interval
    
    while (i < intervals.length) {
        res.push(intervals[i]);
        i++;
    }
    
    return res;
};