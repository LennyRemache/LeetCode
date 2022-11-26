/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
const updateMatrix = (mat) => {
    let queue = [];
    
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i,j,0]);
            } else mat[i][j] = -1;
        }
    }
    
    const dir = [[0,1], [0,-1], [-1,0], [1,0]];
    
    while (queue.length) {
        let pos = queue.shift();
        let row = pos[0];
        let col = pos[1];
        let distance = pos[2];
        
        if (mat[row][col] === -1) {
            mat[row][col] = distance;
        }
        
        dir.forEach((d) => {
            let newRow = row + d[0];
            let newCol = col + d[1];
            
            if (newRow >= 0 && newRow <= mat.length-1 && newCol >= 0 && newCol <= mat[0].length-1){
                if (mat[newRow][newCol] === -1) {
                    queue.push([newRow, newCol, distance+1]);
                }
            }
        })
    }
    
    return mat;
};