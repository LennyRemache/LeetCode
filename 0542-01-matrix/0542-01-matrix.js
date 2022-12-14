/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
    // T: O(n*m + n*m) bc the double for loops depend on the size of the matrix argument + the while loop depends on worse case queue size
    // S: O(n*m) worse case mat is all zeros so queue gets pushed with all the positions of each 0 in the matrix
    
    
    // BFS always paired with the usage of queues
    // bfs prevents revisits of the same cells in the matrix
    let queue = [];

    // store all cells position that contain 0's and change all cells with 1's to -1 as a way to determine we reached a cell that needs its distance calculated
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            // push into queue the row and col position and lastly a 0 to help calculate distances to nearest 0 when modified when trraversing the matrix/graph
            if (mat[i][j] === 0) queue.push([i,j]);
            else mat[i][j] = -1; // used to signal we reach a cell that needs to find its closest 0 distance
        }
    }

    // helper array to serve as our traversals in different directions at current cell in queue
    const dir = [[1,0], [-1,0], [0,-1], [0,1]]; // up, down, left, right

    // BFS as long as we have cell information stored in queue
    while (queue.length) { 
        const pos = queue.shift(); // remove first cell info from queue
        const row = pos[0]; // index 0 contains row value
        const col = pos[1]; // index 1 contains col value
        //const distance = pos[2]; // index 2 contains distance value currently to reach the closest 0;
        // ex: if curr cell from queue is 0 the distance is 0
        
        /* if the dequeued cell is -1 then we can modify its value in the matrix to whatever the distance to the closest 0 is
        if (mat[row][col] === -1) {
            mat[row][col] = distance;
        }*/
       

        // helper function to traverse in all 4 directions of curr cell that was dequeued from the queue
        dir.forEach((d) => {
            const newRow = row + d[0];
            const newCol = col + d[1];
            
            // if a valid matrix position, meaning no new indices are out of bounds
            if (newRow >= 0 && newRow <= mat.length - 1 && newCol >= 0 && newCol <= mat[0].length - 1) {
                if (mat[newRow][newCol] === -1) { // if we traverse to a new cell with -1 then we enqueue new cell info and also curr cell's distance value + 1       
                    mat[newRow][newCol] = 1 + mat[row][col]; // we can also modify its distance to 0 based on the prev cells "distance to a 0" + 1
                    queue.push([newRow, newCol]); 
                }
            }
        })
    }

    return mat;
};