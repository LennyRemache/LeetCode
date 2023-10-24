/**
 * @param {number[]} temperatures
 * @return {number[]}
 */

// O(n) runtime since at most each temp will be seen twice 
// O(n) space for the resulting array and monotonic stack

const dailyTemperatures = (temperatures) => {
    const res = new Array(temperatures.length).fill(0);
    
    // monotonic decreasing stack
    const stack = [];
    
    for(let i = 0; i < temperatures.length; i++) {
        const currTemp = temperatures[i];
        
        // only way we can compare prev temps with curr temp is to have a stack with values
        // then we can check if curr temp is greater than the prev temp at the top of the stack
        while (stack.length > 0 && currTemp > stack[stack.length-1][0]) {
            // if yes then we can continously pop the top of the stack until prev temp is not less than curr temp
            const [temp, index] = stack.pop();
            res[index] = i - index; // prev temp's # of days to get a greater temp is calculated by prev temps index and curr temps index
            // it would be stored at the same index in res as in temperatures
        }
        stack.push([currTemp, i]) // setting up for next iteration to find # of days to find a temp greater than the curr temp
    }
    
    return res;
};