/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
    // T: O(n*m) since we are traversing the grid
    // S: O(n*m) since we are also using a queue which worse case could 
    let queue = [];
    let numFresh = 0;
    
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            // if cell is a starting rotten orange
            if (grid[i][j] === 2) {
                queue.push([i,j]); // store the coordinates of the starting rotted oranges
            } else if (grid[i][j] === 1) { // keep track of total fresh oranges in order to check in the end 
                                           // if all fresh oranges were rotted
                numFresh += 1;
            }
        }
    }
    
    // BFS
    const dir = [[-1,0],[1,0],[0,-1],[0,1]];
    // Start to rot the oranges and keep track of time passed
    let time = 0;
    while (queue.length > 0 && numFresh > 0) {
        let qLen = queue.length;
        for(let k = 0; k < qLen; k++) {
            let [r, c] = queue.shift();

            dir.forEach((d) => {
                const newRow = r + d[0];
                const newCol = c + d[1];
                
                // in bounds and fresh orange
                if (0 <= newRow && newRow < grid.length && 0 <= newCol && newCol < grid[0].length && grid[newRow][newCol] === 1) {
                    queue.push([newRow, newCol]);
                    grid[newRow][newCol] = 2; // marking the orange as being rotten
                    numFresh -= 1;
                }
            })
        }
        time += 1;
    }
        
    return numFresh > 0 ? -1 : time ;        
};