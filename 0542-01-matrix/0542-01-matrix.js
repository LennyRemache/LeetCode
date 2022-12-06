/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
    let queue = [];
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j,0]);
            } else {
                mat[i][j] = -1;
            }
        }
    }
    
    const dir = [[0,1], [0,-1], [1,0], [-1,0]] // right, left, down, up
    
    while (queue.length > 0) {
        const cell = queue.shift();
        const row = cell[0];
        const col = cell[1];
        const dist = cell[2]; // distance from nearest 0
        
        if(mat[row][col] === -1) mat[row][col] = dist;
        
        dir.forEach((d) => {
            const newRow = row + d[0];
            const newCol = col + d[1];
            
            if (newRow >= 0 && newRow < mat.length && newCol >= 0 && newCol < mat[0].length) {
                if (mat[newRow][newCol] === -1) {
                    queue.push([newRow, newCol, dist + 1]);
                }
            
            }
        })
    }
   
    return mat;
};