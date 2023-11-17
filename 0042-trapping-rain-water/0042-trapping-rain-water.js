/**
 * @param {number[]} height
 * @return {number}
 */

// O(n) runtime since we iterate over each height once
// O(1) space since we just calculate trapped water at each height in place rather than storing
// in a new data structure

const trap = (height) => {
    if(!height.length) return 0; // base case where height array is empty so no water can be trapped to begin with
    
    let left = 0; // left pointer to track which left height we are at in the array
    let right = height.length - 1; // right pointer to track which right height we are at in the array
    
    let leftMax = height[left]; // track the max height to the left of current left height
    let rightMax = height[right]; // track max height to the right of the current right height
    
    let res = 0; // the total amount of water trapped
    
    // while left height pointer does not overlap with right height pointer
    while (left < right) {
        // if the max height to the left of left height is less than the max height to the right of the right height then we check how much water trapped on left side
        if (leftMax < rightMax) {
            left += 1; // increment left height pointer
            leftMax = Math.max(leftMax, height[left]); // update max left height based on new left height position
            // updating maxLeft first prevents negative water amounts since this makes leftMax
            // the bigger number between curr leftMax and curr new height[left]. 
            // so new leftMax will always be greater than or equal to height[left] after this which prevent negative results
            res += leftMax - height[left] // the amount of water that can captured above curr height
        } else { // else we check how much water trapped on right side
            right -= 1; // increment right height pointer
            rightMax = Math.max(rightMax, height[right]); // update max right height based on new right height
            // updating maxRight first prevents negative water amounts since this makes rightMax
            // the bigger number between curr rightMax and curr new height[right]. 
            // so new rightMax will always be greater than or equal to height[right] after this which prevent negative results
            res += rightMax - height[right];
        }   
    }
    
    return res;
};