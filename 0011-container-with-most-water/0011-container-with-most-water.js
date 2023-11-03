/**
 * @param {number[]} height
 * @return {number}
 */
const maxArea = (height) => {
    
    let maxWater = 0;
    
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const width = right - left;
        if(leftHeight < rightHeight) {
            maxWater = Math.max(maxWater, leftHeight * width);
            left += 1;
        } else {
            maxWater = Math.max(maxWater, rightHeight * width);
            right -= 1;
        }
    }
    return maxWater;
};