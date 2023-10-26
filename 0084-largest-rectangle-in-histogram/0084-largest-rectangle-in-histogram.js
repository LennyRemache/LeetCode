/**
 * @param {number[]} heights
 * @return {number}
 */

// O(n) runtime since iterate through each height and at most push and pop each heeight into thw stack once
// O(n) space since worse case stack contains all heights due to all heights being able to extend further right to the end

const largestRectangleArea = (heights) => {
    let maxArea = 0; // used to track the max height from all rectangles in heights
    let stack = []; // used to track heights and how far left they can extend to. their starting index
    
    // iterate through each height in order to check 
    for (const [i, h] of heights.entries()) {
        let start = i;
        // if stack has heights and prev height can no longer extend further to the right based on curr h
        while (stack.length > 0 && stack[stack.length-1][1] > h) {
            const [index, height] = stack.pop(); // remove the prev height that can no longer extend further right to curr h
            
            const w = i - index; // width of rectangle from the start index of prev height and curr h index; 
                                 // this rectangle doesnt include curr h as part of the rectangle                  
            maxArea = Math.max(maxArea, height * w); // check max area of rectangle using prev height and its width
            start = index; // this indicates how far to the left curr h can extend to while ignoring prev height that couldnt extend right anymore
        }
        stack.push([start, h]); // push start since we want to know how far left curr h can extend to
    }

    // leftover heights means they could extend all the way to the right, the end
    for (const [i, h] of stack) {
        const w = heights.length - i;
        maxArea = Math.max(maxArea, h * w);
    }
    
    return maxArea;
};