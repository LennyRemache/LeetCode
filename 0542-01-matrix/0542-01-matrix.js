/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
    // BFS always paired with the usage of queues
    // bfs prevents revisits of the same cells in the matrix
    let queue = [];

    // store all cells position that contain 0's and change all cells with 1's to -1 as a way to determine we reached a cell that needs its distance calculated
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            // push into queue the row and col position and lastly a 0 to help calculate distances to nearest 0 when modified when trraversing the matrix/graph
            if (mat[i][j] === 0) queue.push([i,j, 0]);
            else mat[i][j] = -1;
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
        
       

        // helper function to traverse in all 4 directions of curr cell that was dequeued from the queue
        dir.forEach((d) => {
            const newRow = row + d[0];
            const newCol = col + d[1];
            
            // if a valid matrix position, meaning no new indices are out of bounds
            if (newRow >= 0 && newRow <= mat.length - 1 && newCol >= 0 && newCol <= mat[0].length - 1) {
                if (mat[newRow][newCol] === -1) { // if we traverse to a new cell with -1 then we enqueue new cell info and also curr cell's distance value + 1       
                    mat[newRow][newCol] = 1 + mat[row][col];
                    queue.push([newRow, newCol]);
                }
            }
        })
    }

    return mat;
};