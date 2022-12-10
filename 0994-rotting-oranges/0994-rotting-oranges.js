/**
 * @param {number[][]} grid
 * @return {number}
 */
const orangesRotting = (grid) => {
    let queue = [];
    let numFresh = 0;
    let time = 0;
    
    const bfs = () => {
        const dir = [[-1,0],[1,0],[0,-1],[0,1]];

        while (queue.length > 0) {
            let qLen = queue.length;
            for(let k = 0; k < qLen; k++) {
                let [r, c] = queue.shift();
                
                dir.forEach((d) => {
                    const newRow = r + d[0];
                    const newCol = c + d[1];
                    
                    if (0 <= newRow && newRow < grid.length && 0 <= newCol && newCol < grid[0].length && grid[newRow][newCol] === 1) {
                        queue.push([newRow, newCol]);
                        grid[newRow][newCol] = -1; // marking the orange as being rot by another rotten orange
                        numFresh -= 1;
                    }
                })
            }
            if(queue.length > 0) time += 1;
        }
    }
    
    for (let i = 0; i < grid.length; i++) {
        for(let j = 0; j < grid[0].length; j++) {
            // if cell is a starting rotten orange
            if (grid[i][j] === 2) {
                queue.push([i,j]);
            } else if (grid[i][j] === 1) {
                numFresh += 1;
            }
        }
    }
    
    bfs();
        
    return numFresh > 0 ? -1 : time ;        
};