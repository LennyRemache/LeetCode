/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = (temperatures) => {
    const res = new Array(temperatures.length).fill(0);
    
    // monotonic decreasing stack
    const stack = [];
    
    for(let i = 0; i < temperatures.length; i++) {
        const currTemp = temperatures[i];
        
        while (stack.length > 0 && currTemp > stack[stack.length-1][0]) {
            const [temp, index] = stack.pop();
            res[index] = i - index;
        }
        stack.push([currTemp, i])
    }
    
    return res;
};